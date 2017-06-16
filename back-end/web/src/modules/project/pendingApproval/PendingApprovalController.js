/**
 * Created by Lxg on 2017/6/16.
 */

function PendingApprovalController($scope, pendingApprovalService) {
  let vm = $scope.vm = {};

  vm.projectList = [
    {
      title: '胶东国际机场（胶州）临空经济区规划1',
      stages: ['合同审定', '设计输入'],
      role: '设计人员'
    },
    {
      title: '胶东国际机场（胶州）临空经济区规划2',
      stages: ['合同审定'],
      role: '设计人员'
    },
    {
      title: '胶东国际机场（胶州）临空经济区规划3',
      stages: ['合同审定', '设计输入'],
      role: '设计人员'
    }
  ];

  vm.init = function () {
    let param = {};
    pendingApprovalService.getPendingApprovals(param).then(function (res) {
      console.log('/project/pendingApproval/getApprovals.do接口返回的数据是' + res);
    });
  };

  vm.init();
}

PendingApprovalController.$inject = ['$scope', 'pendingApprovalService'];
PendingApprovalController.controllerName = 'PendingApprovalController';

export default PendingApprovalController;
