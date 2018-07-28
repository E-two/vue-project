module.exports = {
    proxyList: {
        '/apis': {
            target: 'http://localhost:3001',
            changeOrigin: true,
            pathRewrite: {
                '^/apis': '/' // rewrite url
            }
        }
    }
}