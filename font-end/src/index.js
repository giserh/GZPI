/**
 * Created by Lxg on 2017/6/12.
 */

import './assets/less/index.less';
import routerConf from './config/router/routerConf';
import scripts from './config/scripts';

angular.module('app.services', []);
scripts.forEach(item => {
  if (item.service) {
    angular.module('app.services').factory(item.service.name, item.service);
  }
});

angular.module('app.controllers', []);
scripts.forEach(item => {
  if (item.controller) {
    angular.module('app.controllers').controller(item.controller.name, item.controller);
  }
});

let app = angular.module('app', ['ui.router', 'app.services', 'app.controllers']);

app.controller('AppController', ['$scope', function ($scope) {

}]);

app.config(routerConf);
