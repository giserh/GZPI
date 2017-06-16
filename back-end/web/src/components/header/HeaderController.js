/**
 * Created by Lxg on 2017/6/12.
 */

function HeaderController($scope, headerService) {
  let vm = $scope.vm = {};

  vm.logout = function () {
    headerService.logout();
  };
}

HeaderController.$inject = ['$scope', 'headerService'];
HeaderController.controllerName = 'HeaderController';

export default HeaderController;
