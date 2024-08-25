import SectionHeader from "@/components/SectionHeader";
import style from "./style.module.css";
import ProjectCard from "@/components/ProjectCard";

const ProjectSection = () => {
    return (
        <section className={`w-full section_container bg-lightDark py-8`} style={{marginBottom: "0px"}} id="projects">
            <SectionHeader
                title="Some of my favorite projects"
                tailing={
                    <>
                        <span
                            className="text-primary flex items-center flex-row-reverse md:flex-row"
                            style={{ gap: "4px" }}
                        >
                            <hr style={{ width: "50px" }} />
                            Recent Work
                        </span>
                        <button className="border p-2 border-primary text-white">View All Projects</button>
                    </>
                }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5" style={{marginTop: "30px"}}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
        </section>
    );
};

export default ProjectSection;
