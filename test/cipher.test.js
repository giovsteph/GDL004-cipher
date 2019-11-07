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
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 19', () => {
        expect(cipher.encode(19, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toEqual("HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    //Test Minusculas
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" with offset 19', () => {
        expect(cipher.encode(19, 'abcdefghijklmnopqrstuvwxyz')).toEqual('hijklmnopqrstuvwxyzabcdefg');
    });
});


describe('cipher.decode', () => {
    it('debería ser una función', () => {
        expect(typeof cipher.decode).toBe('function');
    });
    //Test Mayusculas
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
        expect(cipher.decode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ").toEqual("HIJKLMNOPQRSTUVWXYZABCDEFG"))
    });
    //Test Minusculas
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
        expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

});