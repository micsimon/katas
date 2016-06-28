module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: ['src/*.js', 'spec/*.js'],
        exclude: [],
        preprocessors: {},
        reporters: ['mocha'],
        port: 9876,
        logLevel: config.LOG_INFO,// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        autoWatch: false, // enable / disable watching file and executing tests whenever any file changes
        browsers: ['Chrome'],
        singleRun: true,
        plugins: [
            'karma-sinon',
            'karma-mocha',
            'karma-chai',
            'karma-mocha-reporter'
        ],
        reportSlowerThan: 500,
        retryLimit: 2 // When a browser crashes, karma will try to relaunch. This defines how many times karma should relaunch a browser before giving up.
    })
};
