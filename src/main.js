let currentTab = null;

const tabMap = {
    info: 'info.html',
    cv: 'cv.html',
    painting: 'painting.html',
    drawing: 'drawing.html',
    print: 'print.html',
    //projectsTab: 'projects.html'
};

function showTab(tabId) {
    // show tabContent
    document.getElementById("tabContent").style.display = "block";

    if (currentTab === tabId) {
        document.getElementById('tabContent').innerHTML = '';
        currentTab = null;
    } else {
        fetch('src/tabs/' + tabMap[tabId])
            .then(res => res.text())
            .then(html => {
                document.getElementById('tabContent').innerHTML = html;
                currentTab = tabId;
            });
    }
}

function home() {
    // hide tab content
    document.getElementById("tabContent").style.display = "none";
}