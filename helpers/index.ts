// eslint-disable-next-line
export function getNumber(value: any, defaultValue = null) {
  const num = parseInt(value, 10);
  return isNaN(num) ? defaultValue : num;
}

const isEmpty = (value: unknown) => {
  return (
    value == null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};
export const ifEmptyArr = (value: unknown) => {
  return !isEmpty(value) ? value : [];
};

// eslint-disable-next-line
export const isString = (val: any) => {
  return typeof val === 'string';
};

export function isNumeric(n: string | number) {
  return !isNaN(parseFloat(n as string)) && isFinite(n as number);
}

// const groupBys = <T, K extends keyof any>(
//   list: T[],
//   getKey: (item: T) => K,
// ) =>
//   list.reduce((previous, currentItem) => {
//     const group = getKey(currentItem);
//     if (!previous[group]) previous[group] = [];
//     previous[group].push(currentItem);
//     return previous;
//   }, {} as Record<K, T[]>);

export function groupBy<T, K extends keyof T>(
  arr: T[],
  key: K,
  convertKeyVal?: (val: T[K]) => string,
) {
  // eslint-disable-next-line
  const initialValue = {} as any;
  return arr.reduce((acc, item) => {
    const convKey =
      convertKeyVal != null ? convertKeyVal(item[key]) : item[key];
    acc[convKey] = [...(acc[convKey] || []), item];
    return acc;
  }, initialValue);
}

// export function groupByKey<T, K extends keyof T>(
//   list: T[],
//   key: K,
//   { omitKey = false },
// ) {
//   return list.reduce(
//     (hash, { [key]: value, ...rest }) => ({
//       ...hash,
//       [value]: (hash[value] || []).concat(
//         omitKey ? { ...rest } : { [key]: value, ...rest },
//       ),
//     }),
//     {},
//   );
// }

export function chunksArray<T>(inputArray: T[], perChunk: number) {
  return inputArray.reduce(
    (resultArray: T[][], item: T, index: number) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] as T[]; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    [],
  );
}

export function isArray(obj: []) {
  return obj instanceof Array;
}

export default isEmpty;
