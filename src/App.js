import './App.css';
import ProjectCard from './Components/ProjectCarousel';
import { projects } from './Data/projects';

function App() {
  return (
      <div className="App">
      <div className="name-and-image">
          <div className='name-and-title'>
            <h1>Sami Sile</h1>
            <div className='line'></div>
            <h2>Junior Full-Stack Developer</h2>
          </div>
          <div>
            <img src="headshot.JPG" className='headshot' alt="headshot of sami sile smiling"></img>
          </div>
        </div>
        <div className="connect">
          <h3 className="connect-sentence"><span className="connect-word">Connect</span> with me...</h3>
          <a href='https://www.linkedin.com/in/sami-sile/' target='_blank' rel="noreferrer"><img src="linkedin.svg" className="linkedin" alt='linkedin logo'></img></a>
          <a href='https://github.com/SamiSile97' target='_blank' rel="noreferrer"><img src="github.svg" className="github" alt='github logo'></img></a>
          <a href='mailto:samisile97@gmail.com' target='_blank' rel="noreferrer"><img src="email.svg" className="email" alt='email graphic'></img></a>
        </div>
        <div className='projects-section'>
          <h1 className='projects-section-h2'>Projects</h1>
          <div className='projects'>
            {projects.map((data, index) => {return <ProjectCard img={data.img} text={data.text} link={data.link} key={index} />})}
          </div>
        </div>
        <div className="connect">
          <h3 className="connect-sentence"><span className="connect-word">Connect</span> with me...</h3>
          <a href='https://www.linkedin.com/in/sami-sile/' target='_blank' rel="noreferrer"><img src="linkedin.svg" className="linkedin" alt='linkedin logo'></img></a>
          <a href='https://github.com/SamiSile97' target='_blank' rel="noreferrer"><img src="github.svg" className="github" alt='github logo'></img></a>
          <a href='mailto:samisile97@gmail.com' target='_blank' rel="noreferrer"><img src="email.svg" className="email" alt='email graphic'></img></a>
        </div>
        <div className='about-me'>
          <h1 className='my-story-h2'>My Story</h1>
          <p className='about-me-p'>
            Hey I'm Sami, a hardworking and energetic developer trained in Full-Stack Development at the School of Code.<br></br><br></br>
            My background in science taught me to be curious, logical and resilient when faced with new challenges. During my Chemistry degree I used these skills to contribute to two research projects, one of which was published in the Journal of Organic Chemistry.<br></br><br></br>
            After my degree I wanted to further develop my professional experience, so I worked in a number of roles, ranging from sales to childcare. I always approached each role with a positive attitude to provide and gain as much as I could.<br></br><br></br>
            The variety of experience helped me to recognise what I valued most from a role, something that would continuously challenge me, have an impact and allow me to learn and grow throughout. My search took me to tech and after applying for the School of Code, I had the privilege of being accepted out of over 2000 applicants . I have since been dedicated to building my techinical and personal skills as a developer.<br></br><br></br>
            Outside of work I am very sociable and keep myself busy through my hobbies which include sports, cooking, volunteering and music. 
          </p>
        </div>
      </div>
  );
}

export default App;
