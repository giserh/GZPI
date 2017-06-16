/**
 * Created by Lxg on 2017/6/12.
 */

function baseHttpService($http) {
  function doGet(params, url) {
    return new Promise(function (resolve, reject) {
      $http({
        method: 'GET',
        params,
        url
      }).then(function (res) {
        resolve(res.data);
      }, function (res) {
        reject(res.data);
      });
    });
  }

  function doPost(data, url) {
    return new Promise(function (resolve, reject) {
      $http({
        method: 'POST',
        data,
        url
      }).then(function (res) {
        resolve(res.data);
      }, function (res) {
        reject(res.data);
      });
    });
  }

  return {doGet, doPost};
}

baseHttpService.$inject = ['$http'];
baseHttpService.serviceName = 'baseHttpService';

export default baseHttpService;
