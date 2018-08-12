module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/Vue-testing/dist/'
    : '/'
}