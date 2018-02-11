const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    historyApiFallback: true
}).listen(8080, 'localhost', err => {
    if (err) {
        console.log(err)
    }

    console.log('Listening at localhost:3000')
})
