const path = require('path');

module.exports = {
    // This is the entry point for the app.
    entry: './src/app.tsx',
    // Decides where the bundled up app is output to. Assuming this is what the final HTML pack pulls in?
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    // transpile the JS (using babel) for older browsers (presumably this is where we will tie in TS? not sure...)
    module: {
        rules: [{
            loader: "ts-loader",
            "test": /\.tsx?$/,
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // Make it so we can actually see it in the browser
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            watch: true
        }
    }
}