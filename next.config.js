require('dotenv').config();
const connect = require('./backend/databases/connection');

module.exports = async (phase, { defaultConfig }) => {
  await connect();
  console.log("Initialize script");
  console.log(process.env.MONGODB_URL)
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
  }
  return nextConfig
}
