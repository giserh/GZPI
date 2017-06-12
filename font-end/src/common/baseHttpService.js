/**
 * Created by Lxg on 2017/6/12.
 */

function baseHttpService($http, $q) {
  function http(method, parameter, url) {
    let deffer = $q.defer();
    method = method.toUpperCase();
    $http({
      url: url,
      method: method,
      params: parameter,
      data: parameter
    }).success(function (data) {
      deffer.resolve(data);
    }).error(function (data, status) {
      let errorMessage = '调用' + url + '接口出错, \n请求方式: ' + method + '\n错误码: ' + status;
      deffer.reject(errorMessage, status);
    });
    return deffer.promise;
  }

  return {
    http: http
  };
}

baseHttpService.$inject = ["$http", "$q"];

export default baseHttpService;
