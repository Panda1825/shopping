function animate(obj,tager ,callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
    var tep = (tager - obj.offsetLeft) / 10
    tep = tep > 0 ? Math.ceil(tep) : Math.floor(tep)
    if(obj.offsetLeft == tager) {
    clearInterval(obj.timer)
    if(callback) {
        callback()
    }
}
    obj.style.left = obj.offsetLeft + tep +'px'
},5)
}