
export type Work = {
    className: string;
    src: string;
    title: string;
    alt?: string;
    description?: string;
};

export interface WorkComponentProps {
    work: Work;
}

export function WorkComponent({ work }: WorkComponentProps) {
    return <div key={work.title}>
        <img className={work.className} src={work.src} alt={work.alt} />
        <p className="names"><i>{work.title}</i></p>
        <p className="names">{work.description}</p>
    </div>
}