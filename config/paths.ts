import * as path from 'path';

const projectRoot = path.join(__dirname, '..');

const paths = {
    entry: path.join(projectRoot, 'src', 'index.tsx'),
    dist: path.join(projectRoot, 'dist'),
    app: path.join(projectRoot, 'src'),
    config: __dirname,
    template: path.join(projectRoot, 'template'),
    public: path.join(projectRoot, 'public'),
    webpackTSConfig: path.join(__dirname, 'tsconfig.webpack.json'),
    staticPath: '/static'
};

export default paths;
