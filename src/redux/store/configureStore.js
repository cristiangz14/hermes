import configStoreDev from './configureStore.dev';
import configStoreProd from './configureStore.prod';

const PRODUCTION = process.env.NODE_ENV === 'production';

export default PRODUCTION ? configStoreProd : configStoreDev;
