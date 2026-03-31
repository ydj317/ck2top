window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    var elementsToInclude = [];
    
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            elementsToInclude.push({element: el, path: includePath});
        }
    });

    function loadNextElement() {
        if (elementsToInclude.length === 0) {
            // 모든 요소가 로드된 후 initHeader 호출
            if (typeof initHeader === 'function') {
                initHeader();
            }
            return;
        }

        var elData = elementsToInclude.shift();
        var el = elData.element;
        var includePath = elData.path;
        var xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                el.outerHTML = this.responseText;
                loadNextElement();
            }
        };
        
        xhttp.open('GET', includePath, true);
        xhttp.send();
    }

    loadNextElement();
});
