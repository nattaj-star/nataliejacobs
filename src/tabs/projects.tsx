import { WorkComponent, type Work } from "../workUtils";

const projects: Array<Work> = [
    {
        src: "assets/images/print/NJ STUDIO-11.jpg",
        alt: "The Lame Girl",
        description: "Intaglio Print, 2024",
        title: "The Lame Girl",
        className: "content-tall"
    },
    {
        src: "assets/images/print/NJ STUDIO-10.jpg",
        alt: "Cueva",
        description: "Intaglio Print, 2024",
        title: "Cueva",
        className: "content-wide"
    }
];

export function Projects() {
    return (
        <div className="tabContentInner">
            {projects.map((print, idx) => (
                <WorkComponent key={idx} work={print} />
            ))}
        </div>
    );
}