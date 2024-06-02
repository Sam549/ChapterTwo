Object.assign(fallback,{ // Corrected here
    "zlib": require.resolve("browserify-zlib"),
    "querystring": require.resolve("browserify-zlib"),
    "path": require.resolve("path-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "fs": false,
    "stream": require.resolve("stream-browserify"),
    "http": require.resolve("stream-http"),
    "url": require.resolve("url/"),
    "buffer": require.resolve("buffer/") ,
    "net":false,
});
config.resolve.fallback = fallback; // Corrected here
config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
        process: 'process/browser',
    }),
]);
return config;