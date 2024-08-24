import SectionHeader from "@/components/SectionHeader";
import style from "./style.module.css";
import TimeLine, { TimelinePropsType } from "@/components/Timeline";

const experienceData: TimelinePropsType = {
    items: [
        {
            title: "HCAH",
            date: "Dec, 2022",
            description: "Test data dummy data",
        },
        {
            title: "HCAH",
            date: "Dec, 2022",
            description: "Test data dummy data",
        },
        {
            title: "HCAH",
            date: "Dec, 2022",
            description: "Test data dummy data",
        },
        {
            title: "HCAH",
            date: "Dec, 2022",
            description: "Test data dummy data",
        },
    ],
};

const ExperienceSection = () => {
    return (
        <section className={`w-full section_container`}>
            <SectionHeader
                title="3+ years working experience"
                tailing={
                    <>
                        <span
                            className="text-primary flex items-center flex-row-reverse md:flex-row"
                            style={{ gap: "4px" }}
                        >
                            <hr style={{ width: "50px" }} />
                            Technology
                        </span>
                        <p className="text-gray">
                            The technologies expertise at and having experience
                        </p>
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
