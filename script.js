/* JavaScript code here */
console.log("external JS");
//task1
function sumArray(arr){
    var sum=0;
    arr.forEach(function(value,index){
        
        sum+=value;
        
    });
    return sum;
    }
    console.log(sumArray([1,2,3,4,5]));
     console.log(sumArray([19,-2,30,-45]));
    
    

//task 3
function checkEmail(emailString){
    var emailFormat=/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match=emailFormat.test(emailString);
    return match;
    
}
console.log(checkEmail("ema@ak.com"));
console.log(checkEmail("ema.info"));
//task 4

    var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function getReadingStatus(index){
    return library[index].readingStatus;
    
}
console.log(getReadingStatus(2))
//task 5
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
   //5(a)
function addItem(newItem){
    cart.push(newItem);
    console.log(cart);
}
var newItem={name:"Watch",price:64,quantity:1};
addItem(newItem);