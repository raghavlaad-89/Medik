module.exports = {
  apps: [
    {
      name: "medik-backend",
      script: "./backend/server.js", // Adjust to your backend entry point
      instances: "max", // Or specify a number, e.g., 2
      exec_mode: "cluster", // Enables clustering
      watch: true, // Watch for file changes and restart
      ignore_watch: ["node_modules", "logs"], // Ignore these directories
      env: {
        NODE_ENV: "development",
        PORT: 5000,
        MONGO_URI: "mongodb+srv://raghavlaad89:XJyhx7s72cqbY9J5@cluster0.pxczsba.mongodb.net/medik?retryWrites=true&w=majority&appName=Cluster0",
        JWT_SECRET: "abc123"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5000,
        MONGO_URI: "mongodb+srv://raghavlaad89:XJyhx7s72cqbY9J5@cluster0.pxczsba.mongodb.net/medik?retryWrites=true&w=majority&appName=Cluster0",
        JWT_SECRET: "abc123"
      }
    },
    {
      name: "medik-frontend",
      script: "npm",
      args: "start",
      cwd: "C:\Program Files\nodejs\npm.cmd", // Change working directory to frontend
      watch: true,
      ignore_watch: ["node_modules", "build"],
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
