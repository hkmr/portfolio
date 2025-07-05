'use client';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import Carousel from 'react-multi-carousel';
import { achivementData } from './data';

const AchivementSection = () => {
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
    <section
      className={`w-full section_container bg-lightDark py-8 border-primary border-t-2`}
      style={{ marginBottom: '0px', marginTop: '0px' }}
      id="projects"
    >
      <SectionHeader
        title="Certifications and Achivements"
        tailing={
          <>
            <span className="text-primary flex items-center flex-row-reverse md:flex-row" style={{ gap: '4px' }}>
              <hr style={{ width: '50px' }} />
              Certificates
            </span>
          </>
        }
      />
      <div className="" style={{ marginTop: '30px' }}>
        <Carousel swipeable={true} responsive={responsive}>
          {achivementData.map((achivement, index) => (
            <ProjectCard key={index} title={achivement.title} image={achivement.image} link={achivement.link} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default AchivementSection;
