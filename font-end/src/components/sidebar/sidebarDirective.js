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

sidebarDirective.$inject = [];
sidebarDirective.directiveName = 'sidebarDirective';

export default sidebarDirective;
