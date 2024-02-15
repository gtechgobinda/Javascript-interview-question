// function first(second){
// console.log('first')
// second();
// }

// function second(){
// console.log('second');
// }

// first(second);

//-----------Call back hell

// create order
// procced to payment
// show order summery
//update wallet

const cart = ["shoes", "pants", "kurta"];
createOrder(cart, function () {
  proccedToPayment(function () {
    showOrderSummery(function () {
      updateWallet();
    });
  });
});
