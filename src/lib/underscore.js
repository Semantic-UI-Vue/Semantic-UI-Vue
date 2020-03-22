function toWords(input) {
  const regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
  return input.match(regex);
}

export function upperFirst(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function camelCase(input) {
  const inputArray = toWords(input);
  return inputArray.reduce((result, word) => {
    const lowerWord = word.toLowerCase();
    return result + (result ? upperFirst(lowerWord) : lowerWord);
  }, '');
}

export function kebabCase(input) {
  const inputArray = toWords(input);
  return inputArray.map(word => word.toLowerCase()).join('-');
}

export function uniq(array) {
  return array.filter((v, i) => array.indexOf(v) === i);
}

export function escapeRegExp(r) {
  return r.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function mapValues(object, fn) {
  return Object.keys(object).reduce((mapped, key) => {
    mapped[key] = fn(object[key]);
    return mapped;
  }, {});
}

export function without(array, value) {
  return array.filter(el => el !== value);
}

export function groupBy(array, property) {
  return array.reduce((grouped, el) => {
    const key = el[property];
    if (!grouped[key]) {
      grouped[key] = [el];
    } else {
      grouped[key].push(el);
    }
    return grouped;
  }, {});
}

export function sortBy(array, property) {
  return array.sort((a, b) => (a[property] > b[property] ? 1 : -1));
}

export function forIn(object, callback) {
  const _callback = key => callback(object[key], key);
  Object.keys(object).forEach(_callback);
  Object.keys(object.__proto__).forEach(_callback);
}

export function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function defaultsDeep(current, defaults) {
  const target = Object.assign({}, current);
  Object.keys(defaults).forEach(key => {
    const value = defaults[key];
    if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = value;
    } else if (typeof value === 'object' && typeof target[key] === 'object') {
      target[key] = defaultsDeep(target[key], value);
    }
  });
  return target;
}

export function get(obj, path, def = null) {
  return path
    .split('.')
    .reduce(
      (currentObject, key) =>
        currentObject &&
        Object.prototype.hasOwnProperty.call(currentObject, key)
          ? currentObject[key]
          : def,
      obj,
    );
}
