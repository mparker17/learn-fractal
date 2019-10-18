'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const consolidate = require('@frctl/consolidate');
const twigAdapter = consolidate('twig');

fractal.set('project.title', 'Learn fractal');

fractal.components.set('path', __dirname + '/pattern-src/components');
fractal.components.engine(twigAdapter);
fractal.components.set('ext','.twig');

fractal.docs.set('path', __dirname + '/pattern-src/docs');

fractal.web.set('builder.dest', __dirname + '/build');
