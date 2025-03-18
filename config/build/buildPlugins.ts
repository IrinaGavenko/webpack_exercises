import webpack, {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


import {BuildOptions} from './types/types';

export function buildPlugins({mode, paths, analyzer}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';


    let plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}