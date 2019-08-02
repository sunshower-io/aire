const {
    task,
    series,
} = require('gulp'),
    bundler = require('aurelia-bundler'),
    bundles = require('../bundles.js');

const config = {
    force: true,
    baseURL: '.',
    configPath: ['./jspm.config.js'],
    injectionConfigPath: './jspm.config.js',
    bundles: bundles.bundles
};

task('bundle:application', () => {
    return bundler.bundle(config);
});
task('unbundle:application', () => {
    return bundler.unbundle(config);
});

task('bundle', series('build', 'bundle:application'));

task('unbundle', series('unbundle:application'));
