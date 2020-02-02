const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',

    entry:{
        app: './src/index.js'
    } ,
    devtool: 'inline-source-map',
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: 'UsersTable',
    //     }),
    //
    // ],
    output: {

        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
         contentBase: './dist',
         port: 2000,
         open: true,
         historyApiFallback: true
    },


       module: {


         rules: [
             {
                 test: /\.m?js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                     loader: "babel-loader"
                 }
             },
             {
             },
               {
                 test: /\.css$/,
                 use: [
                   'style-loader',
                   'css-loader',
                 ],
               },
             {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader',
                 ],
              },
             {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                   'file-loader',
                 ],
             },
             {
                 test: /\.(csv|tsv)$/,
                 use: [
                   'csv-loader',
                 ],
            },
            {
                 test: /\.xml$/,
                 use: [
                   'xml-loader',
                 ],
            },
          ],

       },
};