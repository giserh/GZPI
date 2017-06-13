/**
 * Created by Lxg on 2017/6/13.
 */

import './tabList.less';
import tabListService from './tabListService';
import tabList from './tabList';
import TabListController from './TabListController';

export default {
  service: tabListService,
  directive: tabList,
  controller: TabListController
};
