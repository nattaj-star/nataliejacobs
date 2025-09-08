import "./NavMenu.css";
import type { Tab } from "./types";

export interface NavMenuProps {
    setTab: (tab: Tab) => void;
    tab: Tab | null; // props pass tab so that we can apply selective styling
}

export function NavMenu({ setTab }: NavMenuProps) {

    const navItems = [
        { key: "painting", label: <>✧ <u>painting</u></> },
        { key: "drawing", label: <>✧ <u>drawing</u></> },
        { key: "print", label: <>✧ <u>print</u></> },
        // todo add projects
        { key: "info", label: <u>info</u> },
        { key: "cv", label: <u>cv</u> },
    ];

    const emailLink = <a href="mailto:natalie2jacobs2@gmail.com" className="nav-item">
        natalie2jacobs2@gmail.com
    </a>;

    const igLink = <a href="http://www.instagram.com/nattty.lite/" target="_blank" rel="noopener noreferrer" className="nav-item">
        nattty.lite
    </a>;

    return (
        <div id="nav-menu" >
            <div className="nav-title">Natalie Jacobs ✧</div>
            <hr className="nav-divider" />
            <div className="nav-section">
                <div className="nav-menu-inner">
                    {navItems.map(item => (
                        <div
                            key={item.key}
                            className="nav-item"
                            onClick={() => setTab(item.key as Tab)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className="nav-section">
                <div className="nav-section-header">CONTACT</div>
                <hr className="nav-divider" />
                <div className="nav-menu-inner">
                    {emailLink}
                    {igLink}
                </div>
            </div>
        </div>
    );
}
