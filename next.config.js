const { withAxiom } = require("next-axiom")

module.exports = withAxiom({
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
})
