module.exports = {
    future: { webpack5: true },
    webpack: config => {
        config.experiments = { topLevelAwait: true }
        return config
    },
}