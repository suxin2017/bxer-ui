export function isEmptyObject(obj) {
    if (obj == null) return true;
    for (let key in obj) {
        return false
    }
    return true;
}

/**
 * 类型判断
 * @param {any} any
 * @param {string} type
 */
function typeJudge(any, type) {
    return Object.prototype.toString.call(any) === type;
}


const type_map = {
    Boolean: "[object Boolean]",
    Number: "[object Number]",
    String: "[object String]",
    Undefined: "[object Undefined",
    Null: "[object Null]",
    Array: "[object Array]",
    Object: "[object Object]",
    Function: "[object Function]",
    Symbol: "[object Symbol]",
    RegExp: "[object RegExp]",
}

export function isString(any) {
    return typeJudge(any,type_map.String)
}
export function isNumber(any) {
    return typeJudge(any,type_map.Number)
}
export function isBoolean(any) {
    return typeJudge(any,type_map.Boolean)
}
export function isUndefined(any) {
    return typeJudge(any,type_map.Undefined)
}
export function isNull(any) {
    return typeJudge(any,type_map.Null)
}
export function isArray(any) {
    return typeJudge(any,type_map.Array)
}
export function isObject(any) {
    return typeJudge(any,type_map.Object)
}
export function isFunction(any) {
    return typeJudge(any,type_map.Function)
}
export function isSymbol(any) {
    return typeJudge(any,type_map.Symbol)
}
export function isRegExp(any) {
    return typeJudge(any,type_map.RegExp)
}


