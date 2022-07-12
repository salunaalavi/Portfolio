import classes from './allProjects.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const AllProjects = (props) => {
  const { projects } = props;
  const [filter, setFilter] = useState('all');
  const [activeButton, setActiveButton] = useState('all');
  const selectedTechs = [];

  //Map through all used techs and add them individually to selectedTechs array
  projects.map((project) => {
    //Complete array
    const techs = project.tech;

    if (Array.isArray(techs)) {
      //Array item
      for (const tech of techs) {
        if (!selectedTechs.includes(tech)) selectedTechs.push(tech);
      }
    }
  });

  //Sort techs alphabetically
  selectedTechs.sort();

  //Set "filter" & current active button
  const handleClick = (tech) => {
    setFilter(tech);
    setActiveButton(tech);
  };

  //Filter projects according to "filter"
  let filteredProjects;

  if (filter === 'all') {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter((tech) => tech.tech.includes(filter));
  }
  //TODO: Add filteredProjects.length to respective btns

  return (
    <div className={classes.projectsGallery}>
      <div className='container'>
        <h1>Semua Project</h1>
        <div className={classes.filter}>
          <p>Sortir berdasarkan stack teknologi:</p>
          <div className={classes.filterButtons}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClick('all')}
              className={
                activeButton === 'all'
                  ? 'btn btn-outlined sm active'
                  : 'btn btn-outlined sm'
              }>
              All
            </motion.button>
            {selectedTechs.map((tech) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleClick(tech)}
                className={
                  activeButton === tech
                    ? 'btn btn-outlined sm active'
                    : 'btn btn-outlined sm'
                }
                key={tech}>
                {tech}
              </motion.button>
            ))}
          </div>
        </div>

        <div className={classes.galleryWrap}>
          <div className={classes.gallery}>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ scale: 0.1 }}
                  layout
                  key={project._id}
                  className={classes.card}>
                  <div className={classes.cardContent}>
                    <h4>{project.title}</h4>
                    <small>
                      {/* TODO: checks if array, because data is currently mixed with strings */}
                      {Array.isArray(project.tech)
                        ? project.tech.join(', ')
                        : project.tech}
                    </small>
                    <p>{project.description}</p>
                  </div>

                  <div className={classes.portfolioLinks}>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target='_blank'
                        rel='noreferrer'>
                        <i className='fab fa-github'></i>
                        Github
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel='noreferrer'>
                        <i className='fas fa-link'></i>
                        Website
                      </a>
                    )}
                    <Link href={`/projects/${project._id}`}>
                      <a>
                        <i className='fa fa-circle-info'></i>
                        Detail project
                      </a>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProjects;
