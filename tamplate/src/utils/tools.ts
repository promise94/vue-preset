export const datatype = (data: any): string => {
  const toString = Object.prototype.toString;
  const typeMap: any = {
    "[object Boolean]": "boolean",
    "[object String]": "string",
    "[object Number]": "number",
    "[object Array]": "array",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Function]": "function",
    "[object Object]": "object",
    "[object RegExp]": "regExp",
    "[object Date]": "date",
    "[object Set]": "set",
    "[object Map]": "map",
    "[object HTMLDivElement]": "html"
  };

  return typeMap[toString.call(data)];
};

export const deepclone = (data: any): any => {
  const type = datatype(data);
  let o: any = undefined;
  if (type === "array") {
    o = [];
    data.forEach((item: any) => {
      o.push(deepclone(item));
    });
  } else if (type === "object") {
    o = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        o[key] = deepclone(data[key]);
      }
    }
  } else if (type === "set") {
    o = new Set();
    data.forEach((item: any) => {
      o.add(deepclone(item));
    });
  } else if (type === "map") {
    o = new Map();

    for (const key in data) {
      o.set(key, deepclone(data[key]));
    }
  } else {
    o = data;
  }

  return o;
};

export default {
  deepclone,
  datatype
};
