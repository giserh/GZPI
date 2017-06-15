/**
 * Created by Lxg on 2017/6/14.
 */

import sidebarConf from '../../config/sidebarConf';

function DataController($scope, $rootScope) {
  $rootScope.module = sidebarConf.data;
  let vm = $scope.vm = {};
}

DataController.$inject = ['$scope', '$rootScope'];
DataController.controllerName = 'DataController';

export default DataController;
