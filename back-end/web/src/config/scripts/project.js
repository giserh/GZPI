/**
 * Created by Lxg on 2017/6/13.
 */

import project from '../../modules/project';
import myProject from '../../modules/project/myProject';
import pendingApproval from '../../modules/project/pendingApproval';
import approvalDetail from '../../modules/project/pendingApproval/detail';

let projectModule = [];
projectModule.push(project);
projectModule.push(myProject);
projectModule.push(pendingApproval);
projectModule.push(approvalDetail);

export default projectModule;
