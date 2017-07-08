import * as express from 'express';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as compiler from 'webpack';

import webpackConfig from '../config/webpack.config';
import webpackDevServerConfig from '../config/webpack.server.config';

const app = express();
app.use(webpackDevMiddleware(compiler(webpackConfig), webpackDevServerConfig));
app.listen(8080);
