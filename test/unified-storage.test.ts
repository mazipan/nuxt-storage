import { key, sampleData } from './constant'
import { Data, MyStorageImpl, UnifiedStorageAbstractFactory } from '../src/unified-storage';

class MyStorage implements MyStorageImpl {
  private data: {
    [key: string]: any;
  }
  getItem(key: string): string | number | Record<string, any> {
    return this.data[key]
  }
  setItem(key: string, value: string): void {
    this.data = {
      ...this.data,
      [key]: value
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
    const data: Data = global.storage.setData(key, sampleData)
    expect(data.value).toEqual(sampleData)
    done()
  })
  
  test('getData should successfully', done => {
    global.storage.setData(key, sampleData)
    const data = global.storage.getData(key)
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
    const data = global.storage.getData('KEY_NULL')
    expect(data).toBe(null)
    done()
  })
})
