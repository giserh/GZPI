/**
 * Created by Leo on 2017/6/12.
 */

import HttpLauncher from './HttpLauncher2';

class TestService extends HttpLauncher{
  static getTestData(param, url) {
    this.doGet(param, url);
  }

  static postTestData(param, url) {
    this.doPost(param, url);
  }
}

export default TestService;
