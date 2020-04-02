export const expandType = {
    all:'all',
    title:'title',
    icon: 'icon',
};


export const getIcon = (icon, data) => {
    if (icon == null) return null;
    let treeIcon = null;
    if (typeof icon === 'string') {
        treeIcon = icon
    }
    if (typeof icon === 'function') {
        treeIcon = icon(data)
    }
    return treeIcon
};


export function reducer(state,action) {
    if(action.type === 'all'){
        const {selectedKeys} = action;
        return selectedKeys;
    }
    const {value} = action;
    let valueIndex = state.indexOf(value);
    if(valueIndex!==-1){
        state.splice(valueIndex,1);
        return [...state]
    }
    return [...state,value];
}
