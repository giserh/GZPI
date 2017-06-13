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
      let tabInfo = scope.tabInfo = scope.conf;
      scope.tabList = tabInfo.tabList;

      scope.selectTab = function (tab, tabInfo) {
        tabInfo.currentTab = tab;
      };

      scope.closeTab = function (tab, tabInfo) {
      };
    }
  };
}

tabList.$inject = ['$rootScope'];

export default tabList;
