import localStorage from '../src/local-storage'
import { key, sampleData } from './constant'
import { Data } from '../src/unified-storage'

describe('local-storage', () => {
  test('setData should successfully', done => {
    localStorage.setData(key, sampleData)
    const data: any = localStorage.getData(key)
    expect(data).toEqual(sampleData)
    done()
  })

  test('getData should successfully', done => {
    localStorage.setData(key, sampleData)
    const data: any = localStorage.getData(key)
    expect(data).toEqual(sampleData)
    done()
  })

  test('getData should return null because key not exist', done => {
    const data: any = localStorage.getData('KEY_SEMBARANGAN')
    expect(data).toBe(null)
    done()
  })

  test('getData should return null because data is null', done => {
    localStorage.setData('KEY_NULL', null)
    const data: any = localStorage.getData('KEY_NULL')
    expect(data).toBe(null)
    done()
  })

  test('getData should return with meta', done => {
    localStorage.setData(key, sampleData)
    const data: Data = localStorage.getData(key, true)
    expect(data).toHaveProperty('created')
    done()
  })

  test('updateData should successfully', done => {
    const newSampleData = [{ b: '1', a: '2' }]
    localStorage.setData(key, sampleData)
    localStorage.updateData(key, newSampleData)
    const data: any = localStorage.getData(key)
    expect(data).toEqual(newSampleData)
    done()
  })

  test('clear should clear the storage', done => {
    localStorage.setData(key, sampleData)
    localStorage.clear()
    const data: any = localStorage.getData(key)
    expect(data).toBe(null)
    done()
  })
})
