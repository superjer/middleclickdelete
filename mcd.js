var undofup = [];
document.addEventListener('mousedown', function(e) {
    if (e.button == 1) {
        var sentinel = document.createElement('script');
        undofup.push({sentinel: sentinel, target: e.target});
        e.target.replaceWith(sentinel);
    }
});

function undofupfunc() {
    try {
        var pop = undofup.pop();
        if (pop) {
            pop.sentinel.replaceWith(pop.target);
        }
    } catch(ex) { }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        undofupfunc();
    }
);

document.addEventListener('keyup', function(e) {
    if (e.which == 85 && e.ctrlKey && e.shiftKey) {
        undofupfunc();
    }
});
