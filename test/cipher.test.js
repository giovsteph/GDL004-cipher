global.window = global;
require('../src/cipher');

describe('cipher', () => {
    it('debería ser un object', () => {
        expect(typeof cipher).toBe('object');
    });
});

describe('cipher.encode', () => {
    it('debería ser una función', () => {
        expect(typeof cipher.encode).toBe('function');
    });
    //Test Mayusculas
    it('debería retornar "NOPQRSTUVWXYZABCDEFGHIJKLM" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 13', () => {
        expect(cipher.encode(13, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("NOPQRSTUVWXYZABCDEFGHIJKLM");
    });
    //Test Minusculas
    it('debería retornar "nopqrstuvwxyzabcdefghijklm" para "abcdefghijklmnopqrstuvwxyz" with offset 13 ', () => {
        expect(cipher.encode(13, 'abcdefghijklmnopqrstuvwxyz')).toBe('nopqrstuvwxyzabcdefghijklm');
    });
});


describe('cipher.decode', () => {
    it('debería ser una función', () => {
        expect(typeof cipher.decode).toBe('function');
    });
    //Test Mayusculas
    it('debería retornar "NOPQRSTUVWXYZABCDEFGHIJKLM" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 13', () => {
        expect(cipher.decode(13, "NOPQRSTUVWXYZABCDEFGHIJKLM")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    //Test Minusculas
    it('debería retornar "nopqrstuvwxyzabcdefghijklm" para "abcdefghijklmnopqrstuvwxyz" with offset 13', () => {
        expect(cipher.decode(13, 'nopqrstuvwxyzabcdefghijklm')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

});