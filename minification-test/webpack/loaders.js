const embedFileSize = 65536

module.exports = [
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }, {
        test: /\.svg$/,
        loader: `url?limit=${embedFileSize}&mimetype=image/svg+xml`
    }, {
        test: /\.png$/,
        loader: `url?limit=${embedFileSize}&mimetype=image/png`
    }, {
        test: /\.jpg$/,
        loader: `url?limit=${embedFileSize}&mimetype=image/jpeg`
    }, {
        test: /\.gif$/,
        loader: `url?limit=${embedFileSize}&mimetype=image/gif`
    }
]
