import { WorkComponent, type Work } from "../workUtils";

const drawings: Array<Work> = [
    {
        className: "content-tall",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/221030_NJacobs-004_Crop.jpg?v=1670603551909",
        title: "The Human Compact 3",
        description: "Ink, Graphite, and Pen on Paper, September 2022",
    },
    {
        className: "content-wide",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/221030_NJacobs-005_Crop.jpg?v=1670603554025",
        title: "I’m Watching You From Here",
        description: "Graphite on Paper, September 2022",
    },
    {
        className: "content-wide",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/TV.jpg?v=1665110741314",
        title: "TV",
        description: "Ink, Graphite, and Charcoal on Paper, July 2022",
    },
    {
        className: "content-tall",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/jacobs_natalie_09%20copy.jpg?v=1682954600628",
        title: "The Mystery Before Us",
        description: "Ink, Graphite, and Charcoal on Paper, July 2022",
    },
    {
        className: "content-wide",
        src: "assets/images/draw/test3.jpg",
        title: "I'd Kill a Dragon For You",
        description: "Ink, Pen, and Charcoal on Paper, September 2022",
    },
    {
        className: "content-wide",
        src: "assets/images/draw/trailcam.jpg",
        title: "Trailcam",
        description: "Ink, Pen, and Graphite on Paper, 2023",
    },
    {
        className: "content-wide",
        src: "assets/images/draw/test4.jpg",
        title: "The Human Compact 1",
        description: "Ink, Pen, and Graphite on Paper, September 2022",
    },
    {
        className: "content-wide",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/221030_NJacobs-003_A.jpg?v=1670603554591",
        title: "The Human Compact 2",
        description: "Pen, Ink, Graphite, and Charcoal on Paper, September 2022",
    },
    {
        className: "content-tall",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/Besame.jpg?v=1693925485628",
        title: "Besamé",
        description: "Pen and Ink on Paper, July 2023",
    },
    {
        className: "content-tall",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/IMG_4682.jpg?v=1693926129295",
        title: "Tall as a Tree and Half as Mighty",
        description: "Charcoal and Ink on Wood. August 2023.",
    },
    {
        className: "content-tall",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/221030_NJacobs-001_A.jpg?v=1682954115815",
        title: "Its Not Just Me It’s Everybody",
        description: "Graphite on Rice Paper, September 2022",
    },
    {
        className: "content-wide",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/221030_NJacobs-002_Crop.jpg?v=1670603550738",
        title: "Pieta",
        description: "Ink and Pen on Paper, October 2022",
    },
    {
        className: "content-wide",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/Jared%20(On%20the%20Phone%20With%20Andres).jpg?v=1665110742468",
        title: "Jared (On the Phone with Andres)",
        description: "Ink, Graphite, and Charcoal on Paper, July 2022",
    },
    {
        className: "content-wide",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/Kate%20and%20Jack%20in%20Motion.jpg?v=1665110743704",
        title: "Kate and Jack in Motion",
        description: "Ink, Graphite, and Charcoal on Paper, June 2022",
    },
    {
        className: "content-tall",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/jacobs_natalie_06%20copy.jpeg?v=1682954682037",
        title: "I Always Knew You",
        description: "Ink, Graphite, and Charcoal on Paper, July 2022",
    },
    {
        className: "content-tall",
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/_Z4A9721%20copy.jpeg?v=1682954867498",
        title: "Untitled",
        description: "Pyrograph on Pine, July 2022",
    },
];

export function Drawing() {
    return (
        <div className="tabContentInner">
            {drawings.map((drawing, i) => (
                <WorkComponent key={i} work={drawing} />
            ))}
        </div>
    );
}