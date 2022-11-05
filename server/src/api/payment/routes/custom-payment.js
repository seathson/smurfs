module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/payment/payop/ipn',
      handler: 'payop.ipn',
      config: {
        auth: false,
      }
    }
  ]
}
