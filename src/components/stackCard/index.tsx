import Image from "next/image";
import style from "./style.module.css";

type StackCardPropsType = {
    title: string;
    description: string;
    icons: string[];
};

const StackCard = ({ title, description, icons }: StackCardPropsType) => {
    return (
        <div className={`${style.card}`}>
            {/* Icons */}
            <div className={`${style.icons_container}`}>
                {icons.map((icon, idx) => (
                    <Image
                        key={idx}
                        height={30}
                        width={30}
                        src={icon}
                        alt="tech-icon"
                    />
                ))}
            </div>
            {/* Content */}
            <div>
                <h4 className="text-white font-bold text-xl xl:text-2xl">{title}</h4>
                <p className="mt-4 text-gray">{description}</p>
            </div>
        </div>
    );
};

export default StackCard;
