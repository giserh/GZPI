/**
 * Created by Lxg on 2017/6/12.
 */

function routerConf($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'config/router/router.html'
    })
    .state('app.home', {
      url: '/home',
      templateUrl: 'modules/home/home.html'
    })
    .state('app.data', {
      url: '/data',
      templateUrl: 'modules/data/data.html'
    })
    .state('app.project', {
      url: '/project',
      templateUrl: 'modules/project/project.html'
    })
    .state('app.talents', {
      url: '/talents',
      templateUrl: 'modules/talents/talents.html'
    })

}

routerConf.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routerConf;
