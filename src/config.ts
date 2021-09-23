import { AppConfig } from 'ts/interfaces/global.interface';

const prodConfig: AppConfig = {
  apiBaseUrl: '',
};

const stagingConfig: AppConfig = {
  apiBaseUrl: '',
};

const localConfig: AppConfig = {
  apiBaseUrl: '',
};

export default (function () {
  switch (process.env.REACT_APP_ENV) {
    case 'production':
      return prodConfig;

    case 'staging':
      return stagingConfig;

    case 'local':
    default:
      return localConfig;
  }
})();
