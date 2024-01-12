module.exports = {
  apps: [
    {
      name: "NewPortfolio",
      port: "3004",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
