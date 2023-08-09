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
          <img src="headshot.JPG" alt="headshot of sami sile smiling"></img>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="connect">
        <h3 className="connect-sentence"><span className="connect-word">Connect</span> with me</h3>
      </div>
      <div className='projects'>
        {projects.map((data, index) => {return <ProjectCard img={data.img} text={data.text} key={index} />})}
      </div>
    </div>
  );
}

export default App;
