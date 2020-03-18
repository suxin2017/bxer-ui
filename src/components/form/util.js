/**
 *
 * @param {object} obj
 * @param {string} keyStr
 * @param {any} defaultValue
 * 只考虑
 *  a.b.c
 *  a[0].b.c
 *  这种情况
 */
function get(obj, keyStr, defaultValue) {
    let result = undefined;
    const pathRegex = /\[(\d*)\]/ig;
    if (obj == null) {
        result = undefined;
    } else {
        const path = keyStr.replace(pathRegex, '$1').split(".")
        let _obj = obj;
        let index = 0;
        while (_obj != null && index < path.length) {
            _obj = _obj[path[index++]];
        }
        result = _obj;
    }
    return result === undefined ? defaultValue : result;

}

