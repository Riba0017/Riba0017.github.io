const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin()
        ]
    }

    return config;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        app:'./index.js',
        map: './map.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            },
            chunks: ['app']
        }),
        new HTMLWebpackPlugin({
            filename: 'map.html',
            template: './map.html',
            minify: {
                collapseWhitespace: isProd
            },
            chunks: ['map']
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }
            // {
            //     from: path.resolve(__dirname, 'src/assets/fonts'),
            //     to: path.resolve(__dirname, 'dist/assets/fonts')
            // }
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            options: {
                hmr: isDev,
                reloadAll: true
            }
        }),
        new UglifyjsWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                },
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
