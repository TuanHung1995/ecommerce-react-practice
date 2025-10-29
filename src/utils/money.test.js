import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';

describe('formatMoney', () => {
    it('formats 1999 cents as $19.99', () => {
        expect(formatMoney(1999)).toBe('$19.99');
    });
    
    it('display 2 decimals', () => {
        expect(formatMoney(2000)).toBe('$20.00');
        expect(formatMoney(2500)).toBe('$25.00');
    });
});
