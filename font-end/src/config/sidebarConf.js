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
  }
};

sidebarConf.project.currentSidebar = sidebarConf.project.sidebarList[1];

export default sidebarConf;
