import logo from './logo.svg';
import Home from './pages/Home/Home';
import './App.css';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NavBar from './NavBar';
import ExperienceBox from "./pages/Experience/ExperienceBox";
import axios from 'axios';
import { useState, useEffect } from 'react';



function App() {
  let [experienceBoxes, setExperienceBoxes] = useState([]);

  useEffect(() => {
    
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_ID}`;

      const config = {
        headers : {
          "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        }
      };

      axios.get(url, config)
      .then(res => {
        console.log(res);
        let tableEntries = res.data.records;

        let items = [];
        tableEntries.forEach(record => {
          let entry = record.fields;
          let item = {
            name: entry["Name"],
            startend: entry["Start date"],
            describe: entry["Description"],
          }
          
          items.push(item);
        });
        setExperienceBoxes(items);
      })
      .catch(err=> console.log(err));
      
      console.log("Finished fetching table from Airtable...");
    }, []);


  return (
    <div className="website">
      <div id="nav">
        <NavBar/>
      </div>
      <div id="home-section">
        <Home />
      </div>

      <div id="about-section">
        <About />
      </div>
      
      <div id="experience-section">
        <div className='items'>
          <Experience />
          {experienceBoxes.map(item => (
            <ExperienceBox name={item["name"]} startend ={item["startend"]} describe={item["describe"]}/>
          ))}
        </div>
      </div>

      <div id="projects-section">
        <Projects />
      </div>


      <div id="contact-section">
        <Contact />
      </div>

    </div>
  );
}

export default App;
