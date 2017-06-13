/**
 * Created by Lxg on 2017/6/13.
 */

function tabList($rootScope) {
  return {
    restrict: 'EA',
    replace: true,
    template: require('./tab-list.html'),
    scope: {
      conf: '='
    },
    link(scope) {
      scope.tabList = scope.conf;
    }
  };
}

tabList.$inject = ['$rootScope'];

export default tabList;
