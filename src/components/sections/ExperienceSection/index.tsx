import SectionHeader from "@/components/SectionHeader";
import style from "./style.module.css";
import TimeLine, { TimelinePropsType } from "@/components/Timeline";

const experienceData: TimelinePropsType = {
  items: [
    {
      title: "Publicis Sapient",
      subtitle: "Associate Technology L1",
      date: "Dec, 2021 - Dec 2022",
      description: "Worked as Fullstack Developer(.Net, React)",
      logo: "/assets/icons/publics-sapient.ico",
    },
    {
      title: "HCAH",
      subtitle: "Software Engineer",
      date: "Dec, 2022 - April, 2023",
      description: "Working as Frontend Developer (React, NextJS)",
      logo: "/assets/icons/hcah.ico",
    },
    {
      title: "HCAH",
      subtitle: "Senior Software Engineer",
      date: "April, 2023 - present",
      description: "Working as Frontend Developer (React, NextJS)",
      logo: "/assets/icons/hcah.ico",
    },
  ],
};

const ExperienceSection = () => {
  return (
    <section className={`w-full section_container`} id="expirence">
      <SectionHeader
        title="Experience"
        tailing={
          <>
            <span className="text-primary flex items-center flex-row-reverse md:flex-row" style={{ gap: "4px" }}>
              <hr style={{ width: "50px" }} />
              Technology
            </span>
            <p className="text-gray">With over 3+ work experience</p>
          </>
        }
      />
      <div className={`${style.timeline_container}`}>
        <TimeLine data={experienceData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
