export  function findParent(ele, tar) {
    const p = tar.toUpperCase();
    if (ele.parentElement.tagName === p) {
        return ele.parentElement
    }
    var c = ele.parentElement;
    while (c.tagName !== p) {
        c = c['parentElement']
        if(c === document.body) break
        if (c.tagName === p) {
            return c
        }
    }
    return 'Sorry no luck'
}
export  function child(parentEle,selector,all = false) {
    return all ? parentEle.querySelectorAll(selector) : parentEle.querySelector(selector)
}
