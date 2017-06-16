/**
 * Created by Lxg on 2017/6/14.
 */

import uuid from '../utils/uuid';

let sidebarConf = {
  data: {
    sidebarList: [
      {
        id: uuid(8, 16),
        title: '个人资料',
        templateUrl: './modules/data/personalData/personalData.html',
        sidebarName: 'personalData',
        iconClass: 'fa fa-file'
      },
      {
        id: uuid(8, 16),
        title: '项目资料',
        templateUrl: './modules/data/projectData/projectData.html',
        sidebarName: 'projectData',
        iconClass: 'glyphicon glyphicon-calendar'
      },
      {
        id: uuid(8, 16),
        title: '所级资料',
        templateUrl: './modules/data/stationData/stationData.html',
        sidebarName: 'stationData',
        iconClass: 'glyphicon glyphicon-tasks'
      },
      {
        id: uuid(8, 16),
        title: '院级资料',
        templateUrl: './modules/data/instituteData/instituteData.html',
        sidebarName: 'instituteData',
        iconClass: 'glyphicon glyphicon-folder-open'
      }
    ]
  },
  project: {
    sidebarList: [
      {
        id: uuid(8, 16),
        title: '新建项目',
        templateUrl: './modules/project/newProject/newProject.html',
        sidebarName: 'newProject',
        iconClass: 'fa fa-file'
      },
      {
        id: uuid(8, 16),
        title: '待审批',
        templateUrl: './modules/project/pendingApproval/pendingApproval.html',
        sidebarName: 'pendingApproval',
        iconClass: 'glyphicon glyphicon-calendar'
      },
      {
        id: uuid(8, 16),
        title: '我的项目',
        templateUrl: './modules/project/myProject/myProject.html',
        sidebarName: 'myProject',
        iconClass: 'glyphicon glyphicon-tasks'
      },
      {
        id: uuid(8, 16),
        title: '项目管理',
        templateUrl: './modules/project/projectManage/projectManage.html',
        sidebarName: 'projectManage',
        iconClass: 'glyphicon glyphicon-folder-open'
      }
    ]
  },
  talent: {
    sidebarList: [
      {
        id: uuid(8, 16),
        title: '院内人才',
        templateUrl: './modules/talent/internalTalents/internalTalents.html',
        sidebarName: 'internalTalents',
        iconClass: 'fa fa-file'
      },
      {
        id: uuid(8, 16),
        title: '院外专家',
        templateUrl: './modules/talent/externalExperts/externalExperts.html',
        sidebarName: 'externalExperts',
        iconClass: 'glyphicon glyphicon-calendar'
      },
      {
        id: uuid(8, 16),
        title: '培训管理',
        templateUrl: './modules/talent/trainingManagement/trainingManagement.html',
        sidebarName: 'trainingManagement',
        iconClass: 'glyphicon glyphicon-tasks'
      }
    ]
  }
};

sidebarConf.setCurrentSidebar = function (moduleName, sidebarName) {
  for (let sidebar of sidebarConf[moduleName].sidebarList) {
    if (sidebar.sidebarName === sidebarName) {
      sidebarConf[moduleName].currentSidebar = sidebar;
      break;
    }
  }
};

sidebarConf.setCurrentSidebar('data', 'personalData');
sidebarConf.setCurrentSidebar('project', 'pendingApproval');
sidebarConf.setCurrentSidebar('talent', 'internalTalents');

export default sidebarConf;
