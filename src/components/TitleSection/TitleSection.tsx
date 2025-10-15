import "./TitleSection.css"

interface TitleSectionProps {
    title: string;
    desc: string
}

const TitleSection = ({title, desc} : TitleSectionProps) => {
    return (
        <div className="titleSection">
            <h1 className="title">{title}</h1>
            <p className="desc">{desc}</p>
        </div>
    )
}

export default TitleSection
