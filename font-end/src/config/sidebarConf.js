/**
 * Created by Lxg on 2017/6/14.
 */

import uuid from '../utils/uuid';

let sidebarConf = {
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
  }
};

sidebarConf.project.currentSidebar = sidebarConf.project.sidebarList[1];

export default sidebarConf;
