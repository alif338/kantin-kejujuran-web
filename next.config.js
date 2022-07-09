require('dotenv').config();
const connect = require('./backend/databases/connection');

module.exports = async (phase, { defaultConfig }) => {
  await connect();
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
  }
  return nextConfig
}
