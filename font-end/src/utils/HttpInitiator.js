/**
 * Created by Lxg on 2017/6/12.
 */

class HttpInitiator {
  static doGet(parameter, url) {
    return doGet(parameter, url);
  }

  static doPost(parameter, url) {
    return doPost(parameter, url);
  }
}

function doGet(parameter, url) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      type: 'GET',
      data: parameter,
      url: url,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      }
    });
  });
}

function doPost(parameter, url) {
  $.ajax({
    type: 'POST',
    data: parameter,
    url: url,
    success: function (data) {
      console.log(data);
    }
  })
}

export default HttpInitiator;
