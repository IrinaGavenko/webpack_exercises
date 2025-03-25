import webpack, {Configuration, DefinePlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


import {BuildOptions} from './types/types';

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';


    let plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new DefinePlugin({
            // all params that are necessary (dev, platform, etc)
            __PLATFORM__: JSON.stringify(platform),
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