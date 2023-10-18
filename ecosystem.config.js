module.exports = {
  apps: [
    {
      name: 'nathantoombs-strapi', // Your project name
      cwd: '/home/ubuntu/nathantoombs-strapi', // Path to your project
      script: 'yarn', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
