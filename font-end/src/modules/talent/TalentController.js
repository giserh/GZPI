/**
 * Created by Lxg on 2017/6/14.
 */

import sidebarConf from '../../config/sidebarConf';

function TalentController($scope, $rootScope) {
  $rootScope.module = sidebarConf.talent;
  let vm = $scope.vm = {};
}

TalentController.$inject = ['$scope', '$rootScope'];
TalentController.controllerName = 'TalentController';

export default TalentController;
