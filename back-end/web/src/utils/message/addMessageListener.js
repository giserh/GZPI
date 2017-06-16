/**
 * Created by Lxg on 2017/6/12.
 */

function addMessageListener(messageType, callback) {
  window.addEventListener("message", function (response) {
    try {
      let data = JSON.parse(response.data);
      if (typeof callback === 'function' && (data.type === messageType || data.name === messageType)) {
        callback(data);
      }
    } catch (e) {
      console.log('message event listener error : ' + messageType);
    }
  }, false);
}

export default addMessageListener;
