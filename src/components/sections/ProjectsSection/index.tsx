'use client';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import Carousel from 'react-multi-carousel';
import { projectData } from './data';

const ProjectSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className={`w-full section_container bg-lightDark py-8`} style={{ marginBlock: '0px' }} id="projects">
      <SectionHeader
        title="Project Showcase"
        tailing={
          <>
            <span className="text-primary flex items-center flex-row-reverse md:flex-row" style={{ gap: '4px' }}>
              <hr style={{ width: '50px' }} />
              Works
            </span>
          </>
        }
      />
      <div className="" style={{ marginTop: '30px' }}>
        <Carousel swipeable={true} responsive={responsive}>
          {projectData.map((project, index) => (
            <ProjectCard key={index} title={project.title} image={project.image} link={project.link} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectSection;
