import localStorage from '../src/local-storage'
import { key, sampleData } from './constant'
import { Data } from '../src/unified-storage'

describe('local-storage', () => {
  test('setData should successfully', done => {
    const data: Data = localStorage.setData(key, sampleData)
    expect(data.value).toEqual(sampleData)
    done()
  })

  test('getData should successfully', done => {
    localStorage.setData(key, sampleData)
    const data = localStorage.getData(key)
    expect(data).toEqual(sampleData)
    done()
  })

  test('getData should return null because key not exist', done => {
    const data = localStorage.getData('KEY_SEMBARANGAN')
    expect(data).toBe(null)
    done()
  })

  test('getData should return null because data is null', done => {
    localStorage.setData('KEY_NULL', null)
    const data = localStorage.getData('KEY_NULL')
    expect(data).toBe(null)
    done()
  })

  test('clear should clear the storage', done => {
    localStorage.setData(key, sampleData)
    localStorage.clear()
    const data = localStorage.getData(key)
    expect(data).toBe(null)
    done()
  })
})
