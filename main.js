let currentTab = null;

const tabMap = {
    info: 'info.html',
    cv: 'cv.html',
    painting: 'painting.html',
    drawing: 'drawing.html',
    print: 'print.html',
    projects: 'projects.html'
};

function showTab(tabId) {
    // show tabContent
    document.getElementById("tabContentId").style.display = "block";

    if (currentTab === tabId) {
        // hide tab content
        document.getElementById('tabContentId').style.display = "none";
        currentTab = null;
    } else {
        fetch('src/tabs/' + tabMap[tabId])
            .then(res => res.text())
            .then(html => {
                document.getElementById('tabContentId').innerHTML = html;
                currentTab = tabId;
            });
    }
}

function home() {
    // hide tab content
    document.getElementById("tabContentId").style.display = "none";
}