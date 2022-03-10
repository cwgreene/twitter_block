function removeEvents() {
    var badnodes=document.querySelectorAll("[aria-label='Timeline: Trending now']")
    try {
        var badnode = badnodes[0]
        badnode.remove()
        console.log("removed 'what's happening'");
    } catch {
        //console.log("failed to remove node. DOOOOOM")
    }
}

var myInterval = setInterval(removeEvents, 1000);
