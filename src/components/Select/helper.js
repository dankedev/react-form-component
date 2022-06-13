import merge from 'deepmerge';

const combineMerge = (target, source, options) => {
  const destination = target.slice();

  source.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
    } else if (options.isMergeableObject(item)) {
      destination[index] = merge(target[index], item, options);
    } else if (target.indexOf(item) === -1) {
      destination.push(item);
    }
  });

  return destination;
};

function findMatch(data, find, defaultValue) {
  // const founded = data.findIndex((el) => el === find);
  //
  // return founded >= 0 ? find : defaultValue;
  return defaultValue;
}

const objectsToArray = (object) => {
  let result = [];

  Object.values(object).forEach((value) => {
    if (typeof value === 'string') {
      result = [...result, value];
    } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      result = [...result, ...objectsToArray(value)];
    }

    return undefined;
  });

  return result;
};

const objectsToString = (object) => {
  return objectsToArray(object).join(' ');
};

export { objectsToString, objectsToArray, findMatch, combineMerge };
