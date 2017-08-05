import * as express from 'express';
import { Application } from 'express';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as webpack from 'webpack';
import { Compiler } from 'webpack';

import webpackConfig from '../config/webpack.dev.config';
import webpackDevServerConfig from '../config/webpack.server.config';
import paths from '../config/paths';

const port: number = 8080;

const app: Application = express();

// have express serve static files
app.use(paths.staticPath, express.static(paths.public));

const compiler: Compiler = webpack(webpackConfig);

// allow webpack to inject output to server
app.use(webpackDevMiddleware(compiler, webpackDevServerConfig));

app.use(webpackHotMiddleware(compiler));

app.listen(port);
