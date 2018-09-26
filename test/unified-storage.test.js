/* eslint-env jest */
import { __getData, __setData } from '../src/unified-storage';
import { __mockStore } from './mock';

beforeEach(() => {
  process.client = true;
});

afterEach(() => {
  process.client = false;
});

const key = 'KEY_DUMMY';
const sampleData = [{a: '1', b: '2'}];
const storage = __mockStore();

describe('unified-storage', () => {
  test('__setData should successfully', (done) => {
    const result = __setData(storage, key, sampleData);
    expect(result.value).toEqual(sampleData);
    done();
  });
  test('__setData should return empty data', (done) => {
    const result = __setData(storage, key);
    expect(result.value).toEqual('');
    done();
  });
  test('__setData should return null because still in server process', (done) => {
    process.client = false;
    const result = __setData(storage, key, sampleData);
    expect(result).toBe(null);
    done();
  });
  test('__getData should successfully', (done) => {
    __setData(storage, key, sampleData);
    const result = __getData(storage, key);
    expect(result).toEqual(sampleData);
    done();
  });
  test('__getData should return null because key not exist', (done) => {
    const result = __getData(storage, 'KEY_SEMBARANGAN');
    expect(result).toBe(null);
    done();
  });
  test('__getData should return null because data is null', (done) => {
    __setData(storage, 'KEY_NULL', null);
    const result = __getData(storage, 'KEY_NULL');
    expect(result).toBe(null);
    done();
  });
  test('__getData should return null because still in server process', (done) => {
    process.client = false;
    const result = __getData(storage, key);
    expect(result).toBe(null);
    done();
  });
});