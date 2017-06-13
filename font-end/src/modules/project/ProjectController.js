/**
 * Created by Lxg on 2017/6/13.
 */

function ProjectController($scope) {
  let vm = $scope.vm = {};

  vm.tabList = [
    {
      id: 1,
      title: '测试tab1',
      templateUrl: ''
    },
    {
      id: 2,
      title: '测试tab2',
      templateUrl: ''
    }
  ];
}

ProjectController.$inject = ['$scope'];

export default ProjectController;
