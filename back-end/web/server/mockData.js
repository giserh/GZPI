/**
 * Created by Lxg on 2017/6/15.
 */

let getApprovals = require('./data/project/pendingApproval/getApprovals');

let mockData = function (app) {
  app.get('/project/pendingApproval/getApprovalCount.do', (req, res) => {
    res.json({count: 10});
  });

  app.get('/project/pendingApproval/getApprovals.do', (req, res) => {
    res.json(getApprovals);
  });

};

module.exports= mockData;
