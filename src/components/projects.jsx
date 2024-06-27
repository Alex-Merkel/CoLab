import React, { useEffect, useState } from 'react';
import { faCircleRight, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [carouselActive, setCarouselActive] = useState(true);

  useEffect(() => {
    // Use Promise.all to fetch data for all repos:
    Promise.all(
      projectData.map(async (project) => {
        // Handle Group Project (GamePlanr) differently due to it's GitHub repo being elsewhere
        if (project.title === 'GamePlanr') {
          return {
            ...project,
            svn_url: 'https://github.com/Co-Lab-You-Belong-in-Tech/GamePlanr',
          };
        } else {
          const response = await fetch(`https://api.github.com/repos/Alex-Merkel/${project.repo}`);
          if (response.status === 200) {
            const repositoryData = await response.json();
            return { ...project, svn_url: repositoryData.svn_url };
          } else {
            throw new Error(`Failed to fetch repository data for ${project.repo}: ${response.status}`);
          }
        }
      })
    )
      .then((data) => {
        setRepositories(data);
      })
      .catch((error) => {
        console.error('Error fetching repositories data from GitHub API:', error);
      });
  }, []);


  // useEffect to setup interval for projects to cycle through project list every 5 seconds
  useEffect(() => {
    let interval;
    if (carouselActive) {
      interval = setInterval(() => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % repositories.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [carouselActive, repositories]);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % repositories.length);
    setCarouselActive(false);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + repositories.length) % repositories.length);
    setCarouselActive(false);
  };

  return (
    <div id="projects" className="p-3 pt-5">
      <div class="wave"/>
      <h2 className="text-center mb-3 underline-title">Check out some of my work:</h2>
      <p> Please note that the sites you visit may be on free tiers, so a quick refresh might be needed for them to load properly.</p>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-md-8 mb-5">
            <div className="d-flex flex-column align-items-center ">
              <h2 className="text-center m-3">
                <a href={repositories[currentProjectIndex]?.link} className="project-link">
                  {repositories[currentProjectIndex]?.title}
                </a>
              </h2>
              <p className="project-description text-center mb-5">
                {repositories[currentProjectIndex]?.description}
              </p>
              <div className="position-relative project-container-wrapper">
                <div className="project-container d-flex align-items-center col-md-12">
                  <button onClick={prevProject} disabled={repositories.length <= 1} id="previous-button" >
                    <FontAwesomeIcon icon={faCircleLeft} size="2x" className='fa-icon' beat/>
                  </button>
                  <a href={repositories[currentProjectIndex]?.link} className="project-link">
                    <img
                      src={repositories[currentProjectIndex]?.image}
                      alt={repositories[currentProjectIndex]?.altText}
                      className="custom-image"
                    />
                  </a>
                  <button onClick={nextProject} disabled={repositories.length <= 1} id="next-button">
                    <FontAwesomeIcon icon={faCircleRight} size="2x" className='fa-icon' beat/>
                  </button>
                </div>
                <a
                  href={repositories[currentProjectIndex]?.svn_url}
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  <FontAwesomeIcon icon={faGithub} className="github-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Projects;

// Project Data (images, links, etc.):
const projectData = [
  {
    title: 'GamePlanr',
    repo: 'https://github.com/Co-Lab-You-Belong-in-Tech/GamePlanr',
    link: 'https://gameplanr.netlify.app/',
    description:
      'A progressive web app (PWA) that streamlines recreational sports team management, empowering team captains with effortless team creation, efficient game scheduling, and seamless communication for an enhanced sports experience.',
    image: '/assets/GamePlanr.png',
    altText: 'A screenshot of the GamePlanr homepage showing the Welcome message and a sign up / login section',
  },
  {
    title: 'Wellness Tracker',
    repo: 'Wellness-Tracker',
    link: 'https://quiet-entremet-f8601f.netlify.app/',
    description:
      'Comprehensive wellness tracking application utilizing React, TypeScript, Flask, Python, HTML, CSS, SQL, PostgreSQL, Auth0, and the Nutritionix API, featuring a user-friendly interface for tracking food and water intake, complete with an intuitive autocomplete search bar for food selection.',
    image: '/assets/Wellness.jpg',
    altText: 'Sunset in mountain landscape with someone stretching / doing yoga',
  },
  {
    title: 'Budget',
    repo: 'Budget',
    link: 'https://budget-unl0.onrender.com/',
    description:
      'A sophisticated budgeting platform using Flask, Python, SQL, JavaScript, PostgreSQL, HTML, and CSS. The application boasts a user-friendly interface with dynamic divs and containers that empower users to effortlessly monitor, analyze, and manage their financial activities in real-time.',
    image: '/assets/Budget.jpg',
    altText: 'A handful of 100 bills fanned out',
  },
  {
    title: 'Blackjack',
    repo: 'Blackjack',
    link: 'https://blackjack-l5du.onrender.com/',
    description:
      'An engaging and immersive Blackjack game brought to life through a blend of powerful technologies. This project utilizes Flask and Python for the server-side logic, while JavaScript, HTML, Bootstrap, and CSS work harmoniously to create a dynamic and visually stunning gaming experience.',
    image: '/assets/Blackjack.PNG',
    altText: 'Overhead view of a blackjack table with cards and poker chips',
  },
  {
    title: 'Portfolio',
    repo: 'my_portfolio',
    link: 'https://fabulous-fox-880e66.netlify.app/',
    description:
      "This is the portfolio site you're currently exploring! At its core, React and JavaScript drive the dynamic behavior, while Vite accelerates the development process. The site's responsive layout is built with HTML, Bootstrap, and CSS, ensuring a seamless experience across various devices.",
    image: '/assets/Portfolio.png',
    altText: 'Screenshot of portfolio homepage, says "Hi, I am Alex."',
  },
];