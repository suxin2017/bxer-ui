/**
 * 获取偏移单位
 * @param width
 * @param length
 * @returns {[]}
 */
export function getOffset(width,length) {
        let result = [];
        for(let i =0;i<length;i++){
            result.push(width * i);
        }
        return result
}
