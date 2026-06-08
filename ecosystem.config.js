module.exports = {
  apps: [
    {
      name: "aqua2lab-website",
      script: "npm",
      args: "start",
      cwd: "C:/Users/Asus/aqua2-lab",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
      restart_delay: 3000,
      max_restarts: 10
    }
  ]
};
