const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      UI_BASE_URL: 'https://walkdog.vercel.app/signup',
    },
  },
})
