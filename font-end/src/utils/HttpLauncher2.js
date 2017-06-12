/**
 * Created by Leo on 2017/6/12.
 */

class HttpLauncher {
  static doGet(url, parameter) {
    checkParameter('doGet', url, parameter);
    doGet(url, parameter);
  }

  static doPost(url, parameter) {
    checkParameter('doPost', url, parameter);
    doPost(url, parameter);
  }
}

function checkParameter(launchType, url, parameter) {
  if (typeof parameter !== 'object') {
    throw new Error('parameter should be an object, \n at HttpLauncher.' + launchType + '(url, parameter) \n at ' + url);
  }
}

function serialize(obj) {
}

function doGet(url, parameter) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url + "?" + serialize(parameter), false);
}

function doPost(url, parameter) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, false);
  xhr.send(parameter);
}

export default HttpLauncher;
