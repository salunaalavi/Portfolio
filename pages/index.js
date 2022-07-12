import Head from 'next/head';
import Hero from '../components/home/hero';
import FeaturedProjects from '../components/projects/featuredProjects';
import Projects from '../components/projects/projects';
import About from '../components/home/about';
import Github from '../components/home/github';
import {
  getFeaturedProjects,
  getNonFeaturedProjects,
} from '../util/projects-util';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Saluna Alavi &lt;Web Developer /&gt;</title>
        <meta
          name='description'
          content='My personal web development portfolio including various frontend and fullstack projects'
        />
      </Head>
      <Hero />
      <About />
      <FeaturedProjects featuredProjects={props.featuredProjects} />
      <Projects nonFeaturedProjects={props.nonFeaturedProjects} />
      <Github />
    </>
  );
}

export const getStaticProps = () => {
  const featuredProjects = getFeaturedProjects();
  const nonFeaturedProjects = getNonFeaturedProjects();

  return {
    props: {
      featuredProjects: featuredProjects,
      nonFeaturedProjects: nonFeaturedProjects,
    },
  };
};
