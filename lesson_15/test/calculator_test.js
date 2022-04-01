const Calculator = require('../calculator');

const calc = new Calculator();

describe(`Calculator tests`, function() {
    test(`should check add function`, async() => {
        let result = calc.add(2, 4, 6);
        expect(result).toEqual(12)
    });

    test(`chould check negative value`, async () => {
        let result = calc.add(-2, 4, -6);
        expect(result).toEqual(-4)
    })

    test(`chould check negative value`, async () => {
        let result = calc.add(2, '4', 6);
        expect(result).toEqual(12)
    })

    test(`chould check negative value`, async () => {
        let result = calc.add(2, Infinity, 6);
        expect(result).toEqual(Infinity)
    })

    test(`chould check negative value`, async () => {
        let result = calc.add(2, NaN, 6);
        expect(result).toBeNaN('');
    })
})