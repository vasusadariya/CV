const path = require('path');

module.exports = {
  webpack: (config) => {
    // Debug logging to identify the issue
    console.log("Webpack Config:", config);

    return config;
  },
  // Ensure this is not overly broad or recursive
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    esmExternals: false, // Fix for certain dependencies
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};
