/**
 * Created by Lxg on 2017/6/13.
 */

function HomeController($scope, $rootScope, homeService) {
  let vm = $scope.vm = {};

  vm.showMyTasks = true;
  vm.showMyApprovals = false;
  vm.showProjectTasks = true;
  vm.showProjectApprovals = true;

  vm.currentPanel = 'MyTasks';
  vm.showPanel = function (PanelName) {
    vm.currentPanel = PanelName;
  };

  vm.toggleItem = function (item) {
    vm['show' + item] = !vm['show' + item];
  };

  /****************** mock data start **********************/

  vm.approvalCount = 12;

  vm.projectTasks = [
    {
      projectId: 'A2015417',
      title: '我的事项 -- 宣威市城市综合防灾规划1',
      type: '规划设计项目1',
      stage: '合同签订1',
      role: '项目负责人1'
    },
    {
      projectId: 'A2015417',
      title: '我的事项 -- 宣威市城市综合防灾规划2',
      type: '规划设计项目2',
      stage: '合同签订2',
      role: '项目负责人2'
    },
    {
      projectId: 'A2015417',
      title: '我的事项 -- 宣威市城市综合防灾规划3',
      type: '规划设计项目3',
      stage: '合同签订3',
      role: '项目负责人3'
    },
    {
      projectId: 'A2015417',
      title: '我的事项 -- 宣威市城市综合防灾规划4',
      type: '规划设计项目4',
      stage: '合同签订4',
      role: '项目负责人4'
    }
  ];

  vm.projectApprovals = [
    {
      title: '胶东国际机场（胶州）临空经济区规划1',
      states: ['合同审定', '设计输入'],
      role: '设计人员'
    },
    {
      title: '胶东国际机场（胶州）临空经济区规划2',
      states: ['合同审定'],
      role: '设计人员'
    },
    {
      title: '胶东国际机场（胶州）临空经济区规划3',
      states: ['合同审定', '设计输入'],
      role: '设计人员'
    }
  ];

  /****************** mock data end **********************/

  vm.init = function () {

  };

  vm.init();

}

HomeController.$inject = ['$scope', '$rootScope', 'homeService'];
HomeController.controllerName = 'HomeController';

export default HomeController;
