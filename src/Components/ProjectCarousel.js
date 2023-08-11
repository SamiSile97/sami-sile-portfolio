import "./projectcard.css"
export default function ProjectCard(props) {

const {img, text, link} = props

    return (
        <div className="project-card">
            <a href={link} target="_blank" rel="noreferrer">
            <img src={img} className="project-img" alt="shots of sami siles projects"></img>
            <p className="project-text">{text}</p>
            </a>
        </div>
    )
}