import {isArray, isRegExp} from "../util/type";

const pathRegex = /\[(\d*)\]/ig;
const getPath = (keyStr) => keyStr.replace(pathRegex, '.$1').split(".");


/**
 *
 * @param {object} obj
 * @param {string} keyStr
 * @param [defaultValue]
 * 只考虑
 *  a.b.c
 *  a[0].b.c
 *  这种情况
 */
export function get(obj, keyStr, defaultValue) {
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
    console.log(path)
    while (index < path.length - 1) {
        if (_obj[path[index]] == null) {
            const nextIsNumber = !isNaN(Number(path[index + 1]));
            if (nextIsNumber) {
                _obj[path[index]] = [];
            } else {
                _obj[path[index]] = {};
            }

        }
        _obj = _obj[path[index++]]
    }
    _obj[path[index]] = value;
    return Object.assign({}, header)
}

/**
 *
 * @param rules
 * @param value
 * @returns {*}
 */
export function verifyRules(rules, value) {
    if (isArray(rules)) {
        for (let i = 0; i < rules.length; i++) {
            const {rule} = rules[i];
            // 正则时候
            if (isRegExp(rule)) {
                if (!rule.test(value)) {
                    return rules[i]
                }
            } else {
                // 函数的时候
                if (!rule(value)) {
                    return rules[i]
                }
            }

        }
    }
}

/**
 * 校验所有数据
 * @param data
 * @param rules
 * @returns {{}}
 */
export function versifyData(data, rules) {
    const verifies = {}

    for (let key of Object.keys(rules)) {
        if (Object.prototype.hasOwnProperty.call(rules, key)) {
            const rule = rules[key];
            const ruleData = data[key];
            const verify = verifyRules(rule, ruleData)
            verifies[key] = verify;
        }
    }
    return verifies;
}
