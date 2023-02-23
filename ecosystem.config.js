module.exports = {
  apps: [
    {
      name: 'offcial-web-nuxt',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
