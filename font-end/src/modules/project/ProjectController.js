/**
 * Created by Lxg on 2017/6/13.
 */

import uuid from '../../utils/uuid';

function ProjectController($scope, $rootScope) {
  let vm = $scope.vm = {};

  $rootScope.module = {
    sidebarList: [
      {
        id: uuid(8, 16),
        title: '新建项目',
        templateUrl: './modules/project/newProject/newProject.html',
        imgSrc: 'components/sidebar/images/newProject.png',
        sidebarName: 'newProject'
      },
      {
        id: uuid(8, 16),
        title: '待审批',
        templateUrl: './modules/project/pendingApproval/pendingApproval.html',
        imgSrc: 'components/sidebar/images/pendingApproval.png',
        sidebarName: 'pendingApproval'
      },
      {
        id: uuid(8, 16),
        title: '我的项目',
        templateUrl: './modules/project/myProject/myProject.html',
        imgSrc: 'components/sidebar/images/myProject.png',
        sidebarName: 'myProject'
      },
      {
        id: uuid(8, 16),
        title: '项目管理',
        templateUrl: './modules/project/projectManage/projectManage.html',
        imgSrc: 'components/sidebar/images/projectManage.png',
        sidebarName: 'projectManage'
      }
    ]
  };
  $rootScope.module.currentSidebar = $rootScope.module.sidebarList[1];
}

ProjectController.$inject = ['$scope', '$rootScope'];

export default ProjectController;
