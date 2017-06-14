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
        let isExisted = false;
        for (let item of $rootScope.module.tabList) {
          if (item === tab) {
            isExisted = true;
            break;
          }
        }

        if (!isExisted) {
          $rootScope.module.tabList.push(tab);
        }

        $rootScope.module.currentTab = tab;

        for (let item of $rootScope.module.sidebarList) {
          if (item.sidebarName === $rootScope.module.currentTab.sidebarName) {
            $rootScope.module.currentSidebar = item;
          }
        }
      };

      $rootScope.closeTab = function (tab) {
        let tabListLength = $rootScope.module.tabList.length;
        if (tabListLength === 1) {
          return;
        }

        let tabIndex = $rootScope.module.tabList.indexOf(tab);
        if (tabIndex === tabListLength - 1) {
          $rootScope.module.tabList.pop();
          if (tab === $rootScope.module.currentTab) {
            $rootScope.module.currentTab = $rootScope.module.tabList[tabListLength - 2];
          }
        } else {
          $rootScope.module.tabList.splice(tabIndex, 1);
          if (tab === $rootScope.module.currentTab) {
            $rootScope.module.currentTab = $rootScope.module.tabList[tabIndex];
          }
        }

        for (let item of $rootScope.module.sidebarList) {
          if (item.sidebarName === $rootScope.module.currentTab.sidebarName) {
            $rootScope.module.currentSidebar = item;
          }
        }
      };
    }
  };
}

tabList.$inject = ['$rootScope'];
tabList.directiveName = 'tabList';

export default tabList;
