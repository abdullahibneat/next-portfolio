module.exports = {
    future: { webpack5: true },
    webpack: config => {
        config.experiments = { topLevelAwait: true }
        
        // Enable SVGR
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
          })
        return config
    },
}