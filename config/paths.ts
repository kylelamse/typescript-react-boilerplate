import * as path from 'path';

const projectRoot: string = path.join(__dirname, '..');

interface StringMap {
    [s: string]: string;
}

const paths: StringMap = {
    entry: path.join(projectRoot, 'client', 'index.tsx'),
    dist: path.join(projectRoot, 'dist'),
    config: __dirname,
    template: path.join(projectRoot, 'template'),
    public: path.join(projectRoot, 'public'),
    webpackTSConfig: path.join(__dirname, 'tsconfig.webpack.json'),
    staticPath: '/static'
};

export default paths;
