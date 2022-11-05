module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/coupon/verify',
      handler: 'coupon.verify',
      config: {
        auth: false,
      }
    }
  ]
}
