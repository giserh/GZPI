/**
 * Created by Lxg on 2017/6/13.
 */

import sidebarConf from '../../config/sidebarConf';

function HomeController($scope, $state, $rootScope) {
  let vm = $scope.vm = {};

  vm.isProjectPanelVisible = true;

  vm.togglePanel = function (panelName) {
    vm['is' + panelName + 'PanelVisible'] = !vm['is' + panelName + 'PanelVisible'];
  };

  vm.showProjectDetail = function (projectInfo) {
    $rootScope.setInitialState('project', 'myProject', projectInfo);
  };
}

HomeController.$inject = ['$scope', '$state', '$rootScope'];
HomeController.controllerName = 'HomeController';

export default HomeController;
