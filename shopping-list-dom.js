// shopping-list dom code here
var inputElement = document.querySelector(".inputText"); 
var addBtnElem = document.querySelector(".addButton");
var counterElem = document.querySelector(".counter")

var instanceOfFactory = shoppingListFactory();







addBtnElem.addEventListener("click", function(){ 
    
    var total = instanceOfFactory.shoppingList(inputElement.value);
  
counterElem.innerHTML = total;

});

addBtnElem.addEventListener('click', shoppingList);