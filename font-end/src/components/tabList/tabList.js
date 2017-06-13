/**
 * Created by Lxg on 2017/6/13.
 */

function tabList($rootScope) {
  return {
    restrict: 'EA',
    replace: true,
    template: require('./tab-list.html'),
    link() {
      $rootScope.module.tabList = [$rootScope.module.currentTab = $rootScope.module.currentSidebar];

      $rootScope.openTab = function (tab) {
        $rootScope.module.tabList.push(tab);
        $rootScope.module.currentTab = tab;

        $rootScope.module.sidebarList.forEach(item => {
          if (item.sidebarName === tab.sidebarName) {
            $rootScope.module.currentSidebar = item;
          }
        })
      };

      $rootScope.closeTab = function (tab) {
      };
    }
  };
}

tabList.$inject = ['$rootScope'];

export default tabList;
