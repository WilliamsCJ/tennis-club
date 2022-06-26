const { withAxiom } = require("next-axiom")

module.exports = withAxiom({
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
})
