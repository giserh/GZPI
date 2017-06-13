/**
 * Created by Lxg on 2017/6/13.
 */

import './sidebar.less';
import sidebarService from './sidebarService';
import sidebarDirective from './sidebarDirective';
import SidebarController from './SidebarController';

export default {
  service: sidebarService,
  directive: sidebarDirective,
  controller: SidebarController
};
