import sessionStorage from '../src/session-storage'
import { key, sampleData } from './constant'
import { Data } from '../src/unified-storage'

describe('session-storage', () => {
  test('setData should successfully', done => {
    sessionStorage.setData(key, sampleData)
    const data: any = sessionStorage.getData(key)
    expect(data).toEqual(sampleData)
    done()
  })

  test('getData should successfully', done => {
    sessionStorage.setData(key, sampleData)
    const data: any = sessionStorage.getData(key)
    expect(data).toEqual(sampleData)
    done()
  })

  test('getData should return null because key not exist', done => {
    const data: any = sessionStorage.getData('KEY_SEMBARANGAN')
    expect(data).toBe(null)
    done()
  })

  test('getData should return null because data is null', done => {
    sessionStorage.setData('KEY_NULL', null)
    const data: any = sessionStorage.getData('KEY_NULL')
    expect(data).toBe(null)
    done()
  })

  test('getData should return with meta', done => {
    sessionStorage.setData(key, sampleData)
    const data: Data = sessionStorage.getData(key, true)
    expect(data).toHaveProperty('created')
    done()
  })

  test('updateData should successfully', done => {
    const newSampleData = [{ b: '1', a: '2' }]
    sessionStorage.setData(key, sampleData)
    sessionStorage.updateData(key, newSampleData)
    const data: any = sessionStorage.getData(key)
    expect(data).toEqual(newSampleData)
    done()
  })

  test('clear should clear the storage', done => {
    sessionStorage.setData(key, sampleData)
    sessionStorage.clear()
    const data: any = sessionStorage.getData(key)
    expect(data).toBe(null)
    done()
  })
})
