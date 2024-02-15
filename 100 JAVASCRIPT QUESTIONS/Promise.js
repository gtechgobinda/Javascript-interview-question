const cart = ["shoes", "pants", "kurta"];

// old way -using callback
api.createOrder(cart, function () {
  api.proccedToPayment(function () {
    api.showOrderSummery(function () {
      api.updateWallet();
    });
  });
});

//new way - using promise
createOrder(cart)
  .then(function (orderId) {
    return proccedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummery(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });

//new way - using promise with arrow function
createOrder(cart)
  .then((orderId) => proccedToPayment(orderId))
  .then((paymentInfo) => showOrderSummery(paymentInfo))
  .then((paymentInfo) => updateWallet(paymentInfo));
