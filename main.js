function largestNumber(num) {
    let res = '';

  for(let i = 0; i < num ; i++ ){
     res = res.concat('9');
  } 
 //const res = '9'.repeat(num);

    return parseInt(res);
   
}


/**
* Test Suite 
*/
describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 3;
        
        // act
        const result = largestNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(999);
    });
});