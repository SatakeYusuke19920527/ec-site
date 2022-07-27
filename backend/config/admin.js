module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c8d7c8eb84f2a1c317832f0630477c22'),
  },
});
