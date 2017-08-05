import { Configuration } from 'webpack';
import * as webpack from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';

import * as path from 'path';
import paths from './paths';

const config: Configuration = {
    entry: {
        client: 'webpack-hot-middleware/client',
        app: ['react-hot-loader/patch', paths.entry],
        vendor : ['react', 'react-dom'],
        polyfill: [
            'core-js/modules/es6.promise',
            'core-js/modules/es6.object.assign',
            'core-js/modules/es7.array.includes',
            'core-js/modules/es7.object.values',
            'regenerator-runtime/runtime'
        ]
    },
    output: {
        filename: '[name].js',
        path: paths.dist,
        chunkFilename: '[name].[id].chunk.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'cheap-module-eval-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'react-hot-loader/webpack'
                    },
                    {
                        loader: 'awesome-typescript-loader',
                        query: {
                            configFileName: paths.webpackTSConfig
                        }
                    }
                ]
            },

            // Extract css files into one giant file
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'polyfill'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.join(paths.template, 'index.ejs'),
            PUBLIC_PATH: paths.staticPath
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

export default config;
