import { add } from '../src/main'

describe('main', () => {
    test('one', () => {
        expect(add(0, 1)).toBe(1);
    })
})