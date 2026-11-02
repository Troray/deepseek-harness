module.exports = {
  apps: [
    {
      name: 'dsh',
      script: './dsh',
      args: 'web --host 192.168.1.100 --port 3081 --token my_secret_token_123 --no-open',
      cwd: './',
      interpreter: 'none',
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
      env: {
        DEEPSEEK_API_KEY: 'sk-xxxxxxxxxxxxxxxxxxxxxxxx',
      },
    },
  ],
}
