export default [{
    input: './index.js',
    output: {
        file: './core/main/bundle.js',
        format: 'cjs',
    },
   
},
{
    input: './framework_package-1/core/py/main.js',
    output: {
        file: './framework_package-1/core/py/main.py',
        // paths: "./framework_package-1/core/py/main.js",
        format: 'cjs',
    },
   
},




]