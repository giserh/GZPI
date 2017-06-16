/**
 * Created by Lxg on 2017/6/16.
 */

import path from '../../../config/path';

function myProjectService(baseHttpService) {
  let myProjectService = {};

  myProjectService.getMyProjects = function (param) {
    return baseHttpService.doGet(param, path.project.myProject.getMyProjects);
  };

  return myProjectService;
}

myProjectService.$inject = ['baseHttpService'];
myProjectService.serviceName = 'myProjectService';

export default myProjectService;
