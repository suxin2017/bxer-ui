/**
 * 首字母大写
 * @param {string} str
 */
export function capitalize(str) {
    return (str.substring(0,1).toUpperCase() + str.substring(1));
}

/**
 * 添加动画样式
 * @param {string} className
 * @param {DOMTokenList} classList
 */
export function addAnimation(className,classList){
        classList.add(className);
        setTimeout(()=>{
            classList.remove(className)
        },200)
}

/**
 * 获取浏览器滚动
 * @returns {number[x , y]}
 */
function getDocumentScroll() {
    const {documentElement} = document;
    return [
        documentElement && documentElement.scrollTop,
        documentElement && documentElement.scrollLeft
    ]
}

/**
 * 获取目标节点中心位置
 * @param tTop
 * @param tLeft
 * @param height
 * @param width
 * @returns {{centerTop: *, centerLeft: *}}
 */
function getCenterCoordinate(tTop,tLeft,height,width) {
    return {
        centerTop:tTop + height / 2,
        centerLeft:tLeft + width / 2
    }
}

const typeMap = {
    'up':(triggerNode,popoverNode)=>{
        return [triggerNode.top - popoverNode.height -7,triggerNode.left ];
    },
    'bottom':(triggerNode,popoverNode)=>{
        return [triggerNode.bottom + 7,triggerNode.left];
    },
    'left':(triggerNode,popoverNode)=>{
        return [triggerNode.top,triggerNode.left - popoverNode.width -7]
    },
    'right':(triggerNode)=>{
        return [triggerNode.top,triggerNode.right +7]
    }
}

/**
 *
 * @param {HTMLElement} triggerNode
 * @param {HTMLElement} popoverNode
 * @param type
 */
export function getCoordinate(triggerNode,popoverNode,type='right') {

    const [baseTop,baseLeft] = getDocumentScroll();
    const triggerNodeDOMRect = triggerNode.getBoundingClientRect();
    const popoverNodeDOMRect = popoverNode.getBoundingClientRect();

    const relativeCoordinate = typeMap[type](triggerNodeDOMRect,popoverNodeDOMRect);
    const [top,left] = relativeCoordinate;

    return [baseTop + top,baseLeft+left]
}

