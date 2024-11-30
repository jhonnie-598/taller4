import { test, expect } from 'vitest';

test('multiplication function works', () => {
    const multiplicacion = (a, b) => a * b;
    expect(multiplicacion(2, 3)).toBe(6);
});
