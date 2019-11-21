
var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const PATHS = {
    dist: path.join(__dirname, 'dist/js'),
    app: path.join(__dirname, 'src/js/pages')
};
module.exports = {
    entry: {
        'add-category': `${PATHS.app}/add-category.js`,
        'add-skills': `${PATHS.app}/add-skills.js`,
        'transaction': `${PATHS.app}/transaction.js`,
        'customer': `${PATHS.app}/customer.js`,
        'professional': `${PATHS.app}/professional.js`,
        'job': `${PATHS.app}/job.js`,
        'mail': `${PATHS.app}/mail.js`,
        'will-be-change': `${PATHS.app}/will-be-change.js`,
        'support-ticket': `${PATHS.app}/support-ticket.js`, 
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    plugins: [
        // separate common code
        new CommonsChunkPlugin('bundle'),
        // new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['babel/preset-env']
                    // }
                }
            }
        ]
    },
    watch: true
};

