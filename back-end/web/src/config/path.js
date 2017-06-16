/**
 * Created by Lxg on 2017/6/15.
 */

let path = {};

path.common = {};

path.data = {};

path.project = {
  newProject: {},
  pendingApproval: {
    getApprovalsCount: '/project/pendingApproval/getApprovalCount.do',
    getApprovals: '/project/pendingApproval/getApprovals.do'
  },
  myProject: {
    getMyProjects: '/project/myProject/getMyProjects.do'
  }
};

path.talent = {};

export default path;
