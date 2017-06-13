/**
 * Created by Lxg on 2017/6/13.
 */

// 8 character ID (base=2)
// uuid(8, 2)  //  "01001010"
// 8 character ID (base=10)
// uuid(8, 10) // "47473046"
// 8 character ID (base=16)
// uuid(8, 16) // "098F4D35"

function uuid(len, radix) {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let uuid = [];
  radix = radix || chars.length;

  if (len) {
    for (let i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        let r = 0 | Math.random() * 16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}

export default uuid;
