

var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry:  "./typeScript/index.tsx",    
    output: {
        filename: "file.js",
        library: "myLib",
        libraryTarget: "var",
        path: path.resolve("./javascript")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    stats: {
        colors: true,
        modules: false,
        reasons: true,
        errorDetails: true
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            //{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }
            { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }
        ]
        // ,

        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    }

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    //externals: {
    //    "react": "React",
    //    "react-dom": "ReactDOM"
    //},

    //plugins: [
    //    new webpack.DefinePlugin({
    //        'process.env.NODE_ENV': JSON.stringify('production')
    //    })
    //]
};