module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: '/dashboard', // We change the path to access to the admin (highly recommended for security reasons).
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a3fb39f4c5092412738b0a792167f30a'),
    },
  },
});
