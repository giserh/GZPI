/**
 * Created by Lxg on 2017/6/13.
 */

import uuid from '../../utils/uuid';

function ProjectController($scope) {
  let vm = $scope.vm = {};

  vm.tabInfo = {
    currentTab: {},
    tabList: [
      {
        id: uuid(8, 16),
        title: '测试tab1',
        templateUrl: './modules/project/newProject/newProject.html'
      },
      {
        id: uuid(8, 16),
        title: '测试tab2',
        templateUrl: './modules/project/pendingApproval/pendingApproval.html'
      }
    ]
  };

  vm.openTab = function (tab, tabList) {

  };

  vm.closeTab = function (tab, tabList) {

  };

}

ProjectController.$inject = ['$scope'];

export default ProjectController;
