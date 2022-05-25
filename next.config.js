module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/matches',
        permanent: true,
      },
    ]
  }
}
