<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="app">
<head>
  <title></title>
  <link rel="stylesheet" href="./testInterface/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="./testInterface/bootstrap/dist/css/bootstrap-theme.min.css">
</head>
<body>

<div class="container" ng-controller="MyController">
  <form style="margin-top: 30px;">
    <div class="form-group">
      <label for="url">请求路径: </label>
      <input type="text" class="form-control" id="url" name="url" ng-model="vm.url">
    </div>
    <div class="form-group">
      <label for="param">参数: </label>
      <textarea class="form-control" id="param" name="param" rows="5" style="resize: vertical;" ng-model="vm.param"></textarea>
    </div>
    <div class="radio" style="margin-bottom: 30px;">
      <strong style="margin-right: 20px;">请求方式: </strong>
      <label style="margin-right: 20px;">
        <input type="radio" name="method" ng-click="vm.selectMethod('GET')">GET
      </label>
      <label>
        <input type="radio" name="method" ng-click="vm.selectMethod('POST')">POST
      </label>
    </div>
    <button type="button" class="btn btn-primary" ng-click="vm.submit()">提交</button>
  </form>
</div>

<script src="./testInterface/angular/angular.min.js"></script>
<script>
  var app = angular.module('app', []);
  app.controller('MyController', ['$scope', '$http', function ($scope, $http) {
    var vm = $scope.vm = {};

    vm.selectMethod = function (method) {
      vm.method = method;
    };

    vm.submit = function () {
      $http({
        url: vm.url,
        method: vm.method,
        params: vm.param.trim(),
        data: vm.param.trim()
      })
        .then(function (res) {
          console.log('请求成功');
        }, function (err) {
          console.log('请求失败: ' + err);
        });
    };
  }]);
</script>
</body>
</html>
