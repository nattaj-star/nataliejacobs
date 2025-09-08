import { useState } from 'react'
import { NavMenu } from './NavMenu.tsx'
import { Home } from './Home.tsx';
import { CV } from './tabs/cv.tsx';
import { Info } from './tabs/info.tsx';
import { Painting } from './tabs/painting.tsx';
import { Drawing } from './tabs/drawing.tsx';
import { Print } from './tabs/print.tsx';
import type { Tab } from './types.ts';

export function App() {
    const [tab, setTab] = useState<Tab | null>(null)
    const handleTabClick = (newTab: Tab | null) => {
        if (tab === newTab) {
            setTab(null); // If the same tab is clicked, close it
        }
        else {
            setTab(newTab);
        }
    }

    const tabContentClass = tab === "cv" || tab === "info" ? "tabContent mobileBoxShadow" : "tabContent";

    return (
        <div className="root">
            <NavMenu setTab={handleTabClick} tab={tab} />
            {tab != null && <div className={tabContentClass}>
                <Home setTab={handleTabClick} />
                <div className="font200">{tab}</div>
                <hr className="nav-divider" />
                {tab == "cv" && <CV />}
                {tab == "info" && <Info />}
                {tab == "painting" && <Painting />}
                {tab == "drawing" && <Drawing />}
                {tab == "print" && <Print />}
                {/* {tab == "projects" && <Projects />} */}
            </div>}
        </div>
    )
}
