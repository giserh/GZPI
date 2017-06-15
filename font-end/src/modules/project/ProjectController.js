/**
 * Created by Lxg on 2017/6/13.
 */

import sidebarConf from '../../config/sidebarConf';

function ProjectController($scope, $rootScope) {
  $rootScope.module = sidebarConf.project;
  let vm = $scope.vm = {};
}

ProjectController.$inject = ['$scope', '$rootScope'];
ProjectController.controllerName = 'ProjectController';

export default ProjectController;
