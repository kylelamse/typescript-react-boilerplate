import * as path from 'path';

const projectRoot = path.join(__dirname, '..');

const paths = {
    dist: path.join(projectRoot, 'dist'),
    app: path.join(projectRoot, 'src'),
    config: path.join(projectRoot, __dirname),
    template: path.join(projectRoot, 'template'),
    public: path.join(projectRoot, 'public'),
    staticPath: '/static'
};

export default paths;
