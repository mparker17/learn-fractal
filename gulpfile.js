'use strict';

const gulp = require('gulp');

// Set up Fractal.
const fractal = require('@frctl/fractal').create();
const consolidate = require('@frctl/consolidate');
const twigAdapter = consolidate('twig');
fractal.set('project.title', 'Learn fractal');
fractal.components.set('path', __dirname + '/pattern-src/components');
fractal.components.engine(twigAdapter);
fractal.components.set('ext','.twig');
fractal.docs.set('path', __dirname + '/pattern-src/docs');
fractal.web.set('builder.dest', __dirname + '/build');
const logger = fractal.cli.console;

// Task: Start fractal server.
gulp.task('fractal:start', function () {
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

// Task: Build fractal assets.
gulp.task('fractal:build', function () {
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});
