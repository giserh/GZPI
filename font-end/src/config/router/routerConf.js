/**
 * Created by Lxg on 2017/6/12.
 */

function routerConf($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'modules/home/home.html'
    })
    .state('app.main', {
      url: '/:path',
      template: ''
    })
}

routerConf.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routerConf;
