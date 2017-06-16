/**
 * Created by Lxg on 2017/6/13.
 */

function HomeController($scope, $rootScope, homeService) {
  let vm = $scope.vm = {};

  vm.showMyTasks = true;
  vm.showMyApprovals = false;
  vm.showProjectTasks = true;
  vm.showProjectApprovals = true;

  vm.currentPanel = 'MyTasks';
  vm.showPanel = function (PanelName) {
    vm.currentPanel = PanelName;
  };

  vm.toggleItem = function (item) {
    vm['show' + item] = !vm['show' + item];
  };

  vm.showProjectDetail = function (projectInfo) {
    $rootScope.setInitialState('project', 'myProject', projectInfo);
  };

  vm.init = function () {
    let param = {pageSize: 123};
    homeService.getRecentProjects(param).then(function (data) {
      console.log(data);
    }, function (err) {
      console.log(err);
    })
  };

  vm.init();

}

HomeController.$inject = ['$scope', '$rootScope', 'homeService'];
HomeController.controllerName = 'HomeController';

export default HomeController;
