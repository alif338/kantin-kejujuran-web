const { default: axios } = require('axios');
require('dotenv').config();
const connect = require('./backend/databases/connection');

module.exports = async (phase, { defaultConfig }) => {
  await connect();
  console.log("Initialize script");
  console.log(process.env.MONGODB_URI)
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
    }
  }
  return nextConfig
}
