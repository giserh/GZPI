/**
 * Created by Lxg on 2017/6/13.
 */

function sidebarDirective() {
  return {
    restrict: 'EA',
    replace: true,
    template: require('./sidebar.html'),
    link() {
    }
  };
}

export default sidebarDirective;
