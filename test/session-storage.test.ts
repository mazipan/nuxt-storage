import sessionStorage from '../src/local-storage'
import { key, sampleData } from './constant'
import { Data } from '../src/unified-storage'

describe('local-storage', () => {
  test('setData should successfully', done => {
    const data: Data = sessionStorage.setData(key, sampleData)
    expect(data.value).toEqual(sampleData)
    done()
  })

  test('getData should successfully', done => {
    sessionStorage.setData(key, sampleData)
    const data = sessionStorage.getData(key)
    expect(data).toEqual(sampleData)
    done()
  })

  test('getData should return null because key not exist', done => {
    const data = sessionStorage.getData('KEY_SEMBARANGAN')
    expect(data).toBe(null)
    done()
  })

  test('getData should return null because data is null', done => {
    sessionStorage.setData('KEY_NULL', null)
    const data = sessionStorage.getData('KEY_NULL')
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
