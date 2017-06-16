/**
 * Created by Lxg on 2017/6/16.
 */

function MyProjectController($scope, myProjectService) {
  let vm = $scope.vm = {};

  vm.init = function () {
    let param = {
      pageIndex: 1,
      pageSize: 20
    };
    myProjectService.getMyProjects(param).then(function (res) {
      console.log('返回的数据是' + res);
    });
  };

  vm.init();
}

MyProjectController.$inject = ['$scope', 'myProjectService'];
MyProjectController.controllerName = 'MyProjectController';

export default MyProjectController;
