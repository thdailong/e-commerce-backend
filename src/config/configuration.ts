export default () => ({
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/e-commerce',
});
