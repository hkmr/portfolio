import Image from "next/image";
import style from "./style.module.css";

const ProjectCard = () => {
    return (
        <div>
            <div>
                <a href="#">
                    <Image
                        src="/assets/images/projects/alana.png"
                        height={600}
                        width={600}
                        alt="image"
                        className={`${style.project_image}`}
                    />
                </a>
            </div>
            <div className="mt-3">
                <h4 className="text-xl md:text-2xl text-white font-bold mb-2">
                    Alana - live data app
                </h4>
                <a href="#" className="flex items-center gap-2 text-primary text-sm md:text-base">
                    See Project
                    <Image
                        src="/assets/icons/arrow-top-right.svg"
                        height={24}
                        width={24}
                        alt="arrow"
                        className="w-4 md:w-5"
                    />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
