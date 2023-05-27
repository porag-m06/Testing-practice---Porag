const calculator = require('./calculator');

describe("ADD",()=>{
    test('5+ 1= 6',()=>{expect(calculator.add(5,1)).toBe(6)});
    test('5+ 2= 7',()=>{expect(calculator.add(5,2)).toBe(7)});
    test('5+ 3= 8',()=>{expect(calculator.add(5,3)).toBe(8)});
})
describe("SUBTRACT: ",()=>{
    test('5- 1= 4',()=>{expect(calculator.subtract(5,1)).toBe(4)});
    test('5- 2= 3',()=>{expect(calculator.subtract(5,2)).toBe(3)});
    test('5- 3= 2',()=>{expect(calculator.subtract(5,3)).toBe(2)});
})
describe("MULTIPLY",()=>{
    test('5*1= 5',()=>{expect(calculator.multiply(5,1)).toBe(5)});
    test('5*2= 10',()=>{expect(calculator.multiply(5,2)).toBe(10)});
    test('5*3= 15',()=>{expect(calculator.multiply(5,3)).toBe(15)});
})
describe("DIVIDE",()=>{
    test('5/1= 5',()=>{expect(calculator.divide(5,1)).toBe(5)});
    test('4/2= 2',()=>{expect(calculator.divide(4,2)).toBe(2)});
    test('6/3= 2',()=>{expect(calculator.divide(6,3)).toBe(2)});
})