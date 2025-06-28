import Image from 'next/image';
import style from './style.module.css';
import Link from 'next/link';

const ProjectCard = ({ title, image, link }: { title: string; image: string; link: string }) => {
  return (
    <div className="mx-4">
      <div className="rounded-md">
        <Link href={link} target="_blank">
          <Image src={image} height={600} width={600} alt="image" className={`${style.project_image} rounded-md`} />
        </Link>
      </div>
      <div className="mt-3">
        <h4 className="text-xl md:text-2xl text-white font-bold mb-2">{title}</h4>
        <a href={link} className="flex items-center gap-2 text-primary text-xs">
          See Detail
          <Image src="/assets/icons/arrow-top-right.svg" height={12} width={12} alt="arrow" className="w-3" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
