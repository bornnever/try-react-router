module.exports = function () {
  var  config= {
        jsSource: [
            "inde.js",
            "home.js"
        ],
        webPackEntry:"./typescript/Index.tsx",
        webPackDest:"./javascript/"
    }

    return config;
};