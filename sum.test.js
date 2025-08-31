import sum from './sum';


describe("test for multiple sum function",()=>{
    test("adds 2+2 equals to 4",()=>{
    expect(sum(2,2)).toBe(4);
});
   test("adds -4+5 equals to 1",()=>{
    expect(sum(-4,5)).toBe(1);
});

});

