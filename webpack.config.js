const path = require('path');

let mode = 'development';

module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        hot: true,
        static: path.resolve(__dirname, 'public'),
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
        },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']     
    },
    devtool: 'source-map',
};

// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// let mode = 'development';
// if (process.env.NODE_ENV === 'production') {
//   mode = 'production';
// }

// const plugins = [
//     new HtmlWebpackPlugin({
//         template: './src/index.html',
//     }),
//     // new HtmlWebpackPlugin(),
//     // new MiniCssExtractPlugin({
//     //     filename: '[name].[contenthash].css',
//     // }),
//     new MiniCssExtractPlugin(),
// ];

// module.exports = {
//     mode,
//     plugins,
//     // plugins: ['postcss-preset-env'],
//     entry: './src/index.js', 
//     devtool: 'source-map',
  
//     output: {
//         // filename: 'bundle.js',
//         path: path.resolve(__dirname, 'public'), 
//         assetModuleFilename: 'assets/[hash][ext][query]',
//         clean: true, 
//     },

//     devServer: {
//         hot: true,
//     },

//     module: {
//         rules: [
//             { test: /\.(html)$/, use: ['html-loader'] },
//             {
//                 test: /\.(s[ac]|c)ss$/i,
//                 use: [
//                   MiniCssExtractPlugin.loader,
//                   'css-loader',
//                   'postcss-loader',
//                   'sass-loader',
//                 ],
//             },
//             {
//                 test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
//                 type: mode === 'production' ? 'asset' : 'asset/resource',
//             },
//             {
//                 test: /\.(woff2?|eot|ttf|otf)$/i,
//                 type: 'asset/resource',
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/, 
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         cacheDirectory: true,
//                     },
//                 },
//             },
//       ],
//     }

// };