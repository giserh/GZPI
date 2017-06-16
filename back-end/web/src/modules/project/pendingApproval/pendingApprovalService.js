/**
 * Created by Lxg on 2017/6/16.
 */

import path from '../../../config/path';

function pendingApprovalService(baseHttpService) {
  let pendingApprovalService = {};

  pendingApprovalService.getPendingApprovals = function (param) {
    return baseHttpService.doGet(param, path.project.pendingApproval.getApprovals);
  };

  return pendingApprovalService;
}

pendingApprovalService.$inject = ['baseHttpService'];
pendingApprovalService.serviceName = 'pendingApprovalService';

export default pendingApprovalService;
