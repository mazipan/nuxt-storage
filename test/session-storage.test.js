/* eslint-env jest */
import { getData, setData } from '../src/session-storage'
import { __mockStore } from './mock'

const key = 'KEY_DUMMY'
const sampleData = [{ a: '1', b: '2' }]
const storage = __mockStore()

beforeAll(() => {
  global.sessionStorage = storage
})

beforeEach(() => {
  process.client = true
})

afterEach(() => {
  process.client = false
})

afterAll(() => {
  global.sessionStorage = __mockStore()
})

describe('session-storage', () => {
  test('setData should successfully', (done) => {
    const result = setData(key, sampleData)
    expect(result.value).toEqual(sampleData)
    done()
  })
  test('getData should successfully', (done) => {
    setData(key, sampleData)
    const result = getData(key)
    expect(result).toEqual(sampleData)
    done()
  })
  test('getData should return null because key not exist', (done) => {
    const result = getData('KEY_SEMBARANGAN')
    expect(result).toBe(null)
    done()
  })
  test('getData should return null because data is null', (done) => {
    setData('KEY_NULL', null)
    const result = getData('KEY_NULL')
    expect(result).toBe(null)
    done()
  })
})
