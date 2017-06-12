/**
 * Created by Lxg on 2017/6/12.
 */

function HeaderController($scope, headerService) {
  let vm = $scope.vm = {};

  vm.logout = function () {
    headerService.init();
  }
}

HeaderController.$inject = ['$scope', 'headerService'];

export default HeaderController;
