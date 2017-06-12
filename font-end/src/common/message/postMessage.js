/**
 * Created by Lxg on 2017/6/12.
 */

function postMessage(window, messageType) {
  window.postMessage('{"type":"' + messageType + '"}', '*');
}

export default postMessage;
