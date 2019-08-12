// shopping-list tests here
describe('shoping list Factory function' , function(){
    
    it('should return R100.00 when rice is entered in the text box. ' , function(){
       var instance = shoppingListFactory();
        assert.equal(instance.shoppingList("rice"), "100.00");
    });

    it('should return R300.00 when maize meal is entered in the text box. ' , function(){
        var instance = shoppingListFactory();
         assert.equal(instance.shoppingList("maize meal"), "300.00");
     });

     it('should return R200.00 when flour is entered in the text box. ' , function(){
        var instance = shoppingListFactory();
         assert.equal(instance.shoppingList("flour"), "200.00");
     });

     it('should return 0 when the string entered is invalid. ' , function(){
        var instance = shoppingListFactory();
         assert.equal(instance.shoppingList('milk,sugar'), "0.00");
     });
     it('should return R200.00 when flour is entered with invalid inputs. ' , function(){
        var instance = shoppingListFactory();
         assert.equal(instance.shoppingList('flour,milk,sugar'), "200.00");
     });
});
