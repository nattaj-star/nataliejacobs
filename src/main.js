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
    // show the tabContent
    document.getElementById("tabContent").style.display = "block";
    if (currentTab === tabId) {
        document.getElementById('tabContentInner').innerHTML = '';
        currentTab = null;
    } else {
        fetch('src/tabs/' + tabMap[tabId])
            .then(res => res.text())
            .then(html => {
                document.getElementById('tabContentInner').innerHTML = html;
                currentTab = tabId;
            });
    }
}


function home() {
    // hide tab content
    document.getElementById("tabContent").style.display = "none";
}