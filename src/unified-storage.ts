type IValue = Record<string, any> | string | number | null

export interface StorageImp {
  getData(key: string): IValue;
  setData(key: string, value: Record<string, any>, expiryInMinutes?: number, expiryUnit?: string): Data;
  removeItem(key: string): void;
  clear(): void;
}

export interface MyStorageImpl {
  getItem(key: string): IValue;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}

enum unit {
  s = 's',
  m = 'm',
  h = 'h',
  d = 'd'
}

export interface Data {
  created: number;
  value: IValue;
  expiry: number;
  unit: unit;
}

function __isNotNull<T>(value: T | undefined | null): value is T {
  return value as T !== undefined && value as T !== null
}

const MILIS_MULTIPLIER = (1000 * 60) // default is in minutes

export class UnifiedStorageAbstractFactory implements StorageImp {
  private storage: Storage | MyStorageImpl
  constructor(storage: Storage | MyStorageImpl) {
    this.storage = storage
  }
  getData(key: string): IValue {
    try {
      const cache = this.storage.getItem(key)
      if (__isNotNull(cache)) {
        const cacheParsed: Data = JSON.parse(cache as string);
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
  setData(key: string, value: IValue, expiryInMinutes = 5, expiryUnit: unit = unit.m): Data {
    try {
      const data: Data = {
        created: new Date().getTime(),
        value,
        expiry: expiryInMinutes,
        unit: expiryUnit
      }
      this.storage.setItem(key, JSON.stringify(data))
      return data
    } catch (error) {
      console.log('failed set data', error)
    }
  }
  removeItem(key: string): void {
    try {
      this.storage.removeItem(key)
    } catch (error) {
      console.log('failed remove data', error)
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

  static create(): StorageImp {
    if ('localStorage' in window && window.localStorage) {
      if (!this.storage) {
        this.storage = new UnifiedStorageAbstractFactory(window.localStorage)
      }
      return this.storage
    }
    throw new Error(`localStorage doesn't supported`)
  }
}

export class SessionStorageFactory {
  static storage: UnifiedStorageAbstractFactory

  static create(): StorageImp {
    if ('sessionStorage' in window && window.sessionStorage) {
      if (!this.storage) {
        this.storage = new UnifiedStorageAbstractFactory(window.sessionStorage)
      }
      return this.storage
    }
    throw new Error(`sessionStorage doesn't supported`)
  }
}
