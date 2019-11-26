import { key, sampleData } from './constant'
import {
  TestStorageImpl,
  UnifiedStorageAbstractFactory,
  __isNotNull
} from '../src/unified-storage'

class MyStorage implements TestStorageImpl {
  private data: {
    [key: string]: any;
  }
  getItem(key: string): string | number | Record<string, any> {
    return this.data[key]
  }
  setItem(key: string, value: any): void {
    this.data = {
      ...this.data,
      [key]: value
    }
  }
  updateData(key: string, value: any): void {
    const data = this.getItem(key)
    if (__isNotNull(data)) {
      this.removeItem(key)
      this.setItem(key, value)
    }
  }
  removeItem(key: string): void {
    this.data[key] = undefined
  }
  clear(): void {
    this.data = {}
  }
}

beforeAll(() => {
  global.myStorage = new MyStorage()
  global.storage = new UnifiedStorageAbstractFactory(global.myStorage)
})

describe('local-storage', () => {
  test('setData should successfully', done => {
    global.storage.setData(key, sampleData)
    const data: any = global.storage.getData(key)
    expect(data).toEqual(sampleData)
    done()
  })

  test('getData should successfully', done => {
    global.storage.setData(key, sampleData)
    const data: any = global.storage.getData(key)
    expect(data).toEqual(sampleData)
    done()
  })

  test('getData should return null because key not exist', done => {
    const data = global.storage.getData('KEY_SEMBARANGAN')
    expect(data).toBe(null)
    done()
  })

  test('getData should return null because data is null', done => {
    global.storage.setData('KEY_NULL', null)
    const data: any = global.storage.getData('KEY_NULL')
    expect(data).toBe(null)
    done()
  })

  test('updateData should successfully', done => {
    const newSampleData = [{ b: '1', a: '2' }]
    global.storage.setData(key, sampleData)
    global.storage.updateData(key, newSampleData)
    const data: any = global.storage.getData(key)
    expect(data).toEqual(newSampleData)
    done()
  })

  test('clear should clear the storage', done => {
    global.storage.setData(key, sampleData)
    global.storage.clear()
    const data: any = global.storage.getData(key)
    expect(data).toBe(null)
    done()
  })
})
