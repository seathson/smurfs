module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12a8ceb2dad6d7d1c981ad522eb1fb7e'),
  },
});
