export function isEmptyObject(obj) {
    if(obj == null)return true;
    for(let key in obj){
        return false
    }
    return true;
}
