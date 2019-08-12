// shopping list factory function here
function shoppingListFactory(){
    var total=0.00;
    

    function shoppingList(list){ 
        listTotal = 0;
        var listItem = list.split(",");
        for(var i = 0; i < listItem.length; i++){
            var itemType = listItem[i].trim();
        if(itemType === "rice"){
            listTotal += 100.00;
        }
       else if(itemType  === "maize meal"){
        listTotal += 300.00;
        
        }
        else if(itemType  === "flour"){
            listTotal += 200.00;
            }
        else{
            console.log('could not add '+itemType);        }
    }
        return listTotal.toFixed(2)
    }


    function errorMessage(){
        if (listTotal > total) {
            return 'total budget has been exceeded!'
        }
         else {
            return ''
        }
    }

    function checkStringInput(){
        return '0.00';
    }
    return {
        shoppingList,
        errorMessage,
        checkStringInput
    
    }
}
