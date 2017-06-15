/**
 * Created by Lxg on 2017/6/12.
 */

function headerService() {
  function logout() {
    alert('注销');
  }

  return {
    logout
  };
}

headerService.$inject = [];
headerService.serviceName = 'headerService';

export default headerService;
