// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  test('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    test('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    test('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });


  });

  describe('cipher.decode', () => {

    test('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    test('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

  });

});
