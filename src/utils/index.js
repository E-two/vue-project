import EXIF from 'exif-js';

/**
 * console
 * @param {*} msg
 * @param {undefined, info, warn, error} type
 */
export function consoleMe (msg, type) {
  let typeTemp = type;
  if (undefined === type) {
    typeTemp = 'info';
  }
  switch (typeTemp) {
    case 'info': console.log(msg); break; // eslint-disable-line no-console
    case 'warn': console.warn(msg); break; // eslint-disable-line no-console
    case 'error': console.error(msg); break; // eslint-disable-line no-console
    default: console.log(msg); break; // eslint-disable-line no-console
  }
}

/**
 * unicode encoding
 * @param {string} str
 */
export function encodeUnicode (str) {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    res[i] = (`00${str.charCodeAt(i).toString(16)}`).slice(-4);
  }
  return `\\u${res.join('\\u')}`;
}

/**
 * unicode decoding
 * @param {string} str
 */
export function decodeUnicode (str) {
  const strTemp = str.replace(/\\/g, '%');
  return unescape(strTemp);
}

export function getImgNaturalDimensions (img, callback) {
  let nWidth; let nHeight;
  if (img.naturalWidth) { // Modern browser
    nWidth = img.naturalWidth;
    nHeight = img.naturalHeight;
    if (callback !== undefined) callback(nWidth, nHeight);
  } else { // IE6/7/8
    const image = new Image();
    image.src = img.src;
    image.onload = () => {
      if (callback !== undefined) callback(image.width, image.height);
    };
  }
}

export function scrollTop () {
  if (typeof document !== 'undefined') {
    const value = 0;
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  }
}

export const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(file);
};

export const rotateImage = (img, orientation) => {
  const imgWidth = img.width;
  const imgHeight = img.height;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  switch (orientation) {
    case 6: // rotate 90deg
      canvas.width = imgHeight;
      canvas.height = imgWidth;
      ctx.rotate(Math.PI / 2);
      ctx.drawImage(img, 0, -imgHeight, imgWidth, imgHeight);
      break;
    case 3: // rotate 180deg
      ctx.rotate(Math.PI);
      ctx.drawImage(img, -imgWidth, -imgHeight, imgWidth, imgHeight);
      break;
    case 8: // rotate -90deg
      canvas.width = imgHeight;
      canvas.height = imgWidth;
      ctx.rotate(3 * (Math.PI / 2));
      ctx.drawImage(img, -imgWidth, 0, imgWidth, imgHeight);
      break;
    default:
      break;
  }

  return canvas.toDataURL('image/jpeg', 0.8);
};

export const resetOrientation = (file, callback) => {
  EXIF.getData(file, () => {
    const orientation = EXIF.getTag(file, 'Orientation');

    getBase64(file, base64Image => {
      const img = new Image();

      img.addEventListener('load', () => {
        let url;

        if (orientation && orientation !== 1) {
          url = rotateImage(img, orientation);
        } else {
          url = base64Image;
        }

        callback(url);
      });

      img.src = base64Image;
    });
  });
};

export const findKey = (data, value, compare = (a, b) => a === b) =>
  Object.keys(data).find(k => compare(data[k], value));

export const getFileNameByPath = path => {
  const test1 = path.lastIndexOf('/'); // Intercept the path
  const test2 = path.lastIndexOf('\\'); // Intercept the path
  const test = Math.max(test1, test2);
  if (test < 0) {
    return path;
  } else {
    return path.substring(test + 1); // Assigned file name
  }
};
