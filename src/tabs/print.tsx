import { WorkComponent, type Work } from "../workUtils";

const prints: Array<Work> = [
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
    },
    {
        src: "assets/images/print/NJ STUDIO-9.jpg",
        alt: "Demons",
        description: "Intaglio Print, 2024",
        title: "Demons",
        className: "content-wide"
    },
    {
        src: "assets/images/print/NJ STUDIO-12 (1) copy.jpg",
        alt: "Is It Cold in the Water?",
        description: "Intaglio Print, 2024",
        title: "Is It Cold in the Water?",
        className: "content-wide"
    },
    {
        src: "assets/images/print/NJ STUDIO-12 copy.jpg",
        alt: "These Devils In My Patterned Dreams",
        description: "Intaglio Print, 2024",
        title: "These Devils In My Patterned Dreams",
        className: "content-tall"
    },
    {
        src: "assets/images/print/NJ STUDIO-13 copy.jpg",
        alt: "Karaoke",
        description: "Intaglio Print, 2024",
        title: "Karaoke",
        className: "content-wide"
    },
    {
        src: "assets/images/print/NJ STUDIO-6 copy.jpg",
        alt: "Demons II",
        description: "Intaglio Print, 2024",
        title: "Demons II",
        className: "content-tall"
    },
    {
        src: "assets/images/print/NJ STUDIO-8 copy.jpg",
        alt: "Ensnared By the Words of the Mouth",
        description: "Intaglio Print, 2024",
        title: "Ensnared By the Words of the Mouth",
        className: "content-tall"
    }
];

export function Print() {
    return (
        <div className="tabContentInner">
            {prints.map((print, idx) => (
                <WorkComponent key={idx} work={print} />
            ))}
        </div>
    );
}