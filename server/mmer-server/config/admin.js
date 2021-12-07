module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'feaad871ff3912b578367d5a487bfd72'),
  },
});
