import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

import {BuildOptions} from './types/types';

export function buildLoaders({mode}: BuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development';

    const assetLoader = {
        // without svg! Have special loader for svg
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/,
        // use: ['@svgr/webpack'],
        // for using svg as icons - example: size changing
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    // for coloring whole svg
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                },
            },
        ],
    };

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                // making readable styles classes names
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
            }
        }
    }

    const sccsLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // style-loader -> MiniCssExtractPlugin.loader
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            // "css-loader" -> cssLoaderWithModules,
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    // for HMR
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    // move ts check in another brunch
                    // build becomes faster and not crashes due to type errors
                    transpileOnly: true, // transpileOnly: isDev
                },
            }
        ],
        exclude: /node_modules/,
    }

    // order in array is important!
    return [
        assetLoader,
        sccsLoader,
        tsLoader,
        svgLoader,
    ]
}