module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/checkout/smurf',
      handler: 'checkout.smurf',
      config: {
        auth: false,
      }
    },
    {
      method: 'POST',
      path: '/checkout/custom-payment',
      handler: 'checkout.customPayment',
      config: {
        auth: false,
      }
    }
  ]
}
