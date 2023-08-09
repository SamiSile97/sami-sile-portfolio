import "./projectcard.css"
export default function ProjectCard(props) {

const {img, text} = props

    return (
        <div className="project-card">
            <img src={img} alt="shots of sami siles projects"></img>
            <p className="project-text">{text}</p>
        </div>
    )
}