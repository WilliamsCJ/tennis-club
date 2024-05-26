
module.exports = {
  reactStrictMode: true,
  output: 'standalone',
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
