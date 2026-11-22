// Each section has its own address (e.g. nataliejacobs.online/#painting),
// so it can be linked to directly and the back button works.
const tabs = {
    painting: { file: 'painting.html', title: 'Painting' },
    'works-on-paper': { file: 'works on paper.html', title: 'Works on Paper' },
    projects: { file: 'projects.html', title: 'Projects' },
    info: { file: 'info.html', title: 'Info' },
    cv: { file: 'cv.html', title: 'CV' },
};

const SITE_TITLE = 'Natalie Jacobs — Painter & Printmaker';
const pageCache = {};

function currentTabId() {
    return decodeURIComponent(location.hash.slice(1));
}

// Artwork images show a lighter copy from assets/images/web/.
// The original stays in place: clicking an artwork opens it, and the
// "full size" link downloads it.
function enhanceArtwork(root) {
    root.querySelectorAll('.content-container').forEach(container => {
        const images = Array.from(container.querySelectorAll('img'));
        const title = container.querySelector('.names i');
        const downloads = document.createElement('p');
        downloads.className = 'names full-size';

        images.forEach((img, i) => {
            const shown = img.getAttribute('src');
            const full = shown.replace('assets/images/web/', 'assets/images/');

            if (!img.getAttribute('alt') && title) img.setAttribute('alt', title.textContent.trim());

            // If a web copy hasn't been made yet, fall back to the original.
            if (shown !== full) {
                img.addEventListener('error', () => {
                    if (img.getAttribute('src') !== full) img.setAttribute('src', full);
                }, { once: true });
            }

            const link = document.createElement('a');
            link.className = 'artwork-link';
            link.href = full;
            link.target = '_blank';
            link.rel = 'noopener';
            link.setAttribute('aria-label', 'Open full-size image' + (title ? ': ' + title.textContent.trim() : ''));
            img.replaceWith(link);
            link.appendChild(img);

            const dl = document.createElement('a');
            dl.href = full;
            dl.setAttribute('download', '');
            dl.textContent = images.length > 1 ? `full size ${i + 1} ↓` : 'full size ↓';
            if (i > 0) downloads.append(' · ');
            downloads.appendChild(dl);
        });

        if (images.length) container.appendChild(downloads);
    });
}

function setActiveLink(id) {
    document.querySelectorAll('.nav-link').forEach(a => {
        const active = a.getAttribute('href') === '#' + id;
        a.classList.toggle('selected', active);
        if (active) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
    });
}

function route() {
    const id = currentTabId();
    const tab = tabs[id];
    const content = document.getElementById('tabContentId');
    setActiveLink(id);

    if (!tab) {
        content.replaceChildren();
        content.style.display = 'none';
        document.body.classList.remove('tab-open');
        document.title = SITE_TITLE;
        return;
    }

    document.body.classList.add('tab-open');
    content.style.display = '';

    pageCache[id] = pageCache[id] || fetch('src/tabs/' + encodeURIComponent(tab.file)).then(res => {
        if (!res.ok) throw new Error(res.status);
        return res.text();
    });

    pageCache[id]
        .then(html => {
            if (currentTabId() !== id) return; // visitor already moved on
            // Build inside a <template> so nothing downloads until the page is ready.
            const template = document.createElement('template');
            template.innerHTML = html;
            enhanceArtwork(template.content);
            content.replaceChildren(template.content);
            content.scrollTop = 0;
            window.scrollTo(0, 0);
            document.title = tab.title + ' — Natalie Jacobs';
        })
        .catch(() => {
            delete pageCache[id];
            content.innerHTML = '<p>Sorry, this section didn’t load. Please refresh the page.</p>';
        });
}

// Kept so any old onclick="home()" / onclick="showTab(...)" markup still works.
function home() { location.hash = ''; }
function showTab(name) { location.hash = name.replace(/ /g, '-'); }

window.addEventListener('hashchange', route);
route();
