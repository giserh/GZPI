/**
 * Created by Lxg on 2017/6/13.
 */

import sidebarConf from '../../config/sidebarConf';

function ProjectController($scope, $rootScope) {
  let vm = $scope.vm = {};

  $rootScope.module = sidebarConf.project;
}

ProjectController.$inject = ['$scope', '$rootScope'];

export default ProjectController;
