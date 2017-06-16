/**
 * Created by Lxg on 2017/6/16.
 */

function projectSidebar($rootScope) {
  return {
    restrict: 'EA',
    replace: true,
    template: require('./project-sidebar.html'),
    scope: {
      conf: '='
    },
    link(scope) {
      let vm = scope.vm = {};
      vm.projectList = scope.conf;
      vm.currentProject = $rootScope.currentDetail || vm.projectList[0];
      $rootScope.currentDetail = $rootScope.currentDetail || vm.currentProject;
      scope.getProjectDetail = function (project) {
        $rootScope.currentDetail = project;
        vm.currentProject = project;
      };
    }
  }
}

projectSidebar.$inject = ['$rootScope'];
projectSidebar.directiveName = 'projectSidebar';

export default projectSidebar;
