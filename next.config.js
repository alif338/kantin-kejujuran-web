require('dotenv').config();
const connect = require('./backend/databases/connection');

module.exports = (phase, { defaultConfig }) => {
  connect();
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
  }
  return nextConfig
}
