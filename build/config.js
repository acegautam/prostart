module.exports = {
    "env": "dev",
    "styles":{
        "src": "./src/app/styles/app.less",
        "srcdir": "./src/app/styles/**/*.{less,css}",
        "dst": "./public/styles"
    },
    "scripts":{
        "src": "./src/app/scripts/**/*.js",
        "dst": "./public/scripts",
        "bundle": "app.js"
    },
    "publish":{
        "indexsrc": "./src/app/index.html",
        "indexdst": "./public/",
        "polyfillsrc": "./node_modules/babel-polyfill/dist/polyfill.min.js",
        "polyfilldst": "./public/lib/components/babel"
    }
};
