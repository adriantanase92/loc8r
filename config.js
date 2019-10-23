module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.DB_HOST || '127.0.0.1',
    PORT: process.env.PORT || 5000,
    URL: process.env.BASE_URL || 'http://localhost:5000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/Loc8r'
}