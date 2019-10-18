'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
fractal.set('project.title', 'Learn fractal');
fractal.components.set('path', __dirname + '/src/components');
fractal.docs.set('path', __dirname + '/src/docs');
