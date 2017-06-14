/**
 * Created by Lxg on 2017/6/12.
 */

function headerService() {
  function init() {
    alert('headerService');
  }

  return {
    init
  };
}

headerService.$inject = [];
headerService.serviceName = 'headerService';

export default headerService;
