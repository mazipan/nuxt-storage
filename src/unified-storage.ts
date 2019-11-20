enum unit {
  s = 's',
  m = 'm',
  h = 'h',
  d = 'd'
}

export interface Data {
  created: number;
  updated: number;
  value: any;
  expiry: number;
  unit: unit;
}

export interface StorageImpl {
  getData(key: string, withMeta?: boolean): any | Data;
  setData(
    key: string,
    value: Record<string, any>,
    expiryInMinutes?: number,
    expiryUnit?: string
  ): void;
  updateData(key: string, value: Record<string, any>): void;
  removeItem(key: string): void;
  clear(): void;
}

export interface TestStorageImpl {
  getItem(key: string): any | Data;
  setItem(key: string, value: any): void;
  updateData(key: string, value: any): void;
  removeItem(key: string): void;
  clear(): void;
}

export function __isNotNull<T>(value: T | undefined | null): value is T {
  return (value as T) !== undefined && (value as T) !== null
}

const MILIS_MULTIPLIER = 1000 * 60 // default is in minutes

export class UnifiedStorageAbstractFactory implements StorageImpl {
  private storage: Storage | TestStorageImpl
  constructor(storage: Storage | TestStorageImpl) {
    this.storage = storage
  }
  getData(key: string, withMeta?: boolean): any | Data {
    try {
      const cache = this.storage.getItem(key)
      if (__isNotNull(cache)) {
        const cacheParsed: Data = JSON.parse(cache as string)
        if (__isNotNull(cacheParsed)) {
          // check cache expiry time
          const timeNow: number = new Date().getTime()
          const dateCache: number = cacheParsed.created
          let milis = MILIS_MULTIPLIER

          if (cacheParsed.unit === unit.s) {
            milis = MILIS_MULTIPLIER / 60
          } else if (cacheParsed.unit === unit.m) {
            milis = MILIS_MULTIPLIER
          } else if (cacheParsed.unit === unit.h) {
            milis = MILIS_MULTIPLIER * 60
          } else if (cacheParsed.unit === unit.d) {
            milis = MILIS_MULTIPLIER * 60 * 24
          }

          const expiryInMilis: number = cacheParsed.expiry * milis
          const expiryTime: number = dateCache + expiryInMilis

          if (expiryTime > timeNow) {
            if (withMeta) {
              return cacheParsed
            }
            return cacheParsed.value
          } else {
            console.warn('storage is expired')
          }
        }
      }
      return null
    } catch (error) {
      console.warn('failed parse JSON', error)
    }
  }
  setData(
    key: string,
    value: any,
    expiryInMinutes = 5,
    expiryUnit: unit = unit.m
  ): void {
    try {
      const date: number = new Date().getTime()
      const data: Data = {
        created: date,
        updated: date,
        value,
        expiry: expiryInMinutes,
        unit: expiryUnit
      }
      this.storage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.log('failed to set data', error)
    }
  }
  updateData(key: string, value: any): void {
    try {
      let data: Data = this.getData(key, true)
      if (__isNotNull(data)) {
        delete data.value
        data = {
          ...data,
          updated: new Date().getTime(),
          value
        }
        this.storage.setItem(key, JSON.stringify(data))
      }
    } catch (error) {
      console.log('failed to update data', error)
    }
  }
  removeItem(key: string): void {
    try {
      this.storage.removeItem(key)
    } catch (error) {
      console.log('failed to remove data', error)
    }
  }
  clear(): void {
    try {
      this.storage.clear()
    } catch (error) {
      console.log('failed clear storage', error)
    }
  }
}

export class LocalStorageFactory {
  static storage: UnifiedStorageAbstractFactory

  static create(): StorageImpl {
    if (window) {
      if ('localStorage' in window && window.localStorage) {
        if (!this.storage) {
          this.storage = new UnifiedStorageAbstractFactory(window.localStorage)
        }
        return this.storage
      }
      throw new Error(`localStorage doesn't supported`)
    }
    throw new Error(`localStorage doesn't supported`)
  }
}

export class SessionStorageFactory {
  static storage: UnifiedStorageAbstractFactory

  static create(): StorageImpl {
    if (window) {
      if ('sessionStorage' in window && window.sessionStorage) {
        if (!this.storage) {
          this.storage = new UnifiedStorageAbstractFactory(
            window.sessionStorage
          )
        }
        return this.storage
      }
      throw new Error(`sessionStorage doesn't supported`)
    }
    throw new Error(`sessionStorage doesn't supported`)
  }
}
