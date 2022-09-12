const { defineConfig } = require('@vue/cli-service')
module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#6a5acd',
                        'link-color': '#9370db',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
};