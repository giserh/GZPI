/**
 * Created by Lxg on 2017/6/13.
 */

import path from '../../config/path';
import HttpInitiator from '../../utils/HttpInitiator';

function homeService() {
  let homeService = {};

  homeService.getRecentProjects = function (param) {
    return HttpInitiator.doGet(param, path.project.myProject.getMyProjects);
  };

  return homeService;
}

homeService.$inject = [];
homeService.serviceName = 'homeService';

export default homeService;
