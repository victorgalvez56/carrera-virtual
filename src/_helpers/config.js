import defaultConfig from './../config/default.json';
import developmentConfig from './../config/development.json';
import productionConfig from './../config/production.json';
var configuration;

if(process.env.NODE_ENV === 'development'){
    configuration = Object.assign({}, defaultConfig, developmentConfig);
}else if(process.env.NODE_ENV === 'production'){
    configuration = Object.assign({}, defaultConfig, productionConfig);
}

var config = {};

const get = (key) => {
    return configuration[key];
};

export default config = {
    get
};
