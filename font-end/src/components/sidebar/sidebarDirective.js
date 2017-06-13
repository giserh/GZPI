/**
 * Created by Lxg on 2017/6/13.
 */

function sidebarDirective() {
  return {
    restrict: 'EA',
    replace: true,
    template: require('./sidebar.html'),
    link() {
      console.log('sidebarDirective指令加载成功');
    }
  };
}

export default sidebarDirective;
