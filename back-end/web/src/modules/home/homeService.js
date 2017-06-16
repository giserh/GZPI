/**
 * Created by Lxg on 2017/6/13.
 */

import path from '../../config/path';

function homeService(baseHttpService) {
  let homeService = {};

  homeService.getApprovalsCount = function () {
    return baseHttpService.doGet(null, path.project.pendingApproval.getApprovalsCount);
  };

  return homeService;
}

homeService.$inject = ['baseHttpService'];
homeService.serviceName = 'homeService';

export default homeService;
