import * as express from 'express';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as compiler from 'webpack';

import webpackConfig from '../config/webpack.dev.config';
import webpackDevServerConfig from '../config/webpack.server.config';
import paths from '../config/paths';

const app = express();

// have express serve static files
app.use(paths.staticPath, express.static(paths.public));

// allow webpack to inject output to server
app.use(webpackDevMiddleware(compiler(webpackConfig), webpackDevServerConfig));

app.listen(8080);
