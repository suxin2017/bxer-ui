const pathRegex = /\[(\d*)\]/ig;
const getPath = (keyStr) => keyStr.replace(pathRegex, '.$1').split(".");


/**
 *
 * @param {object} obj
 * @param {string} keyStr
 * @param defaultValue
 * 只考虑
 *  a.b.c
 *  a[0].b.c
 *  这种情况
 */
export function get(obj, keyStr,defaultValue) {
    let result = undefined;
    if (obj == null) {
        result = undefined;
    } else {
        let path = getPath(keyStr);
        let _obj = obj;
        let index = 0;
        while (_obj != null && index < path.length) {
            _obj = _obj[path[index++]];
        }
        result = _obj;
    }
    return result === undefined ? defaultValue : result;

}


/**
 *
 */
export function set(obj, keyStr, value) {
    let path = getPath(keyStr);
    let _obj = obj || {};
    let header = _obj;
    let index = 0;
    while (index < path.length-1) {
        if (_obj[path[index]] == null) {
            const nextIsNumber =  !isNaN(Number(path[index+1]));
            if(nextIsNumber){
                _obj[path[index]]  = [];
            }else{
                _obj[path[index]]  = {};
            }

        }
        _obj = _obj[path[index++]]
    }
    _obj[path[index]] = value;
    return Object.assign({}, header)
}

// console.log(JSON.stringify(set({},'a.b.c.d[1]',{})));
// console.log(JSON.stringify(set(null,'a[0].b.c','test')));
//
// console.log(getPath('a[0].b.c'))

