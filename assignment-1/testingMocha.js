describe("pow", function() {

    
    // following 5 cases are designed in such a way that they will cover every corner case.


      it("for x == 1 the result is 1", function() {
        assert.equal(pow(1, -1), 1);
      });

      it("for x == 0 and y == 0 the result is NaN", function() {
        assert.isNaN(pow(0, 0));
      });

      it("for x == 0 the result is 0", function() {
        assert.equal(pow(0, -1), 0);
      });

      it("for negative n the result is NaN", function() {
        assert.isNaN(pow(2, -1));
      });
    
      it("for non-integer n the result is NaN", function() {
        assert.isNaN(pow(2, 1.5));
      });


  
  });