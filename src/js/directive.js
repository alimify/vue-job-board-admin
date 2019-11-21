export const dropdown = {
    inserted: function (el,binding) {
        el.addEventListener('click',function (e) {
            let target = document.querySelector(`[dropdown='${binding.value}']`),
            ev= e.target,
            rect = el.getClientRects()[0];
            target.style.cssText = `right: ${rect.right - rect.x}px;top: ${ev.offsetTop + rect.height}px;display:block`;
            
        },false)
        
    }
}
export const nextShow = {
    inserted: function (el, binding) {
        el.addEventListener('click', function (e) {
           let ev = e,
                rect = el.getClientRects()[0];
            el.nextElementSibling.style.cssText = `right: ${rect.right - rect.x}px;top:${ev.pageY}px;display:block`;
            
        }, false)

    }
}