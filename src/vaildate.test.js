import { verifiedInput } from "./Components/Sorting/utils/validate";

describe('verifiedInput test', ()=> {
  test('1,2 is verified', () => {
    expect(verifiedInput('1,2')).toBe(true);
  });
  
  test('123,223 is verified', () => {
    expect(verifiedInput('123,233')).toBe(true);
  });

  test('1,2,3,4 is verified', () => {
    expect(verifiedInput('1,2,3,4')).toBe(true);
  });

  test('123,322,1234,988 is verified', () => {
    expect(verifiedInput('123,322,1234,988')).toBe(true);
  });

  test('1,1,1,1,1,1,1,1,1,1,1,1,1,1... is verified', () => {
    expect(verifiedInput('1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1')).toBe(true);
  });

  test('empty is not verified', () => {
    expect(verifiedInput('')).toBe(false);
  });

  test(', is not verified', () => {
    expect(verifiedInput(',')).toBe(false);
  });

  test('abc is not verified', () => {
    expect(verifiedInput('abc')).toBe(false);
  });

  test('1,2,3,a is not verified', () => {
    expect(verifiedInput('1,2,3,a')).toBe(false);
  });

  test('1,2,3, is not verified', () => {
    expect(verifiedInput('1,2,3,')).toBe(false);
  });

  test(',1,2,3 is not verified', () => {
    expect(verifiedInput(',1,2,3')).toBe(false);
  });

  test(',,1,2,3 is not verified', () => {
    expect(verifiedInput('1,2,3,,')).toBe(false);
  });

  test('ab,sc,sd,we is not verified', () => {
    expect(verifiedInput('ab,sc,sd,we')).toBe(false);
  });

  test('안녕,123,322,1234,988 is not verified', () => {
    expect(verifiedInput('안녕,123,322,1234,988')).toBe(false);
  });

  test('@123,233,98 is not verified', () => {
    expect(verifiedInput('@123,233,98')).toBe(false);
  });

})