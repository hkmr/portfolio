import { ReactElement } from 'react';
import style from './style.module.css';

const SectionHeader = ({ title, tailing }: { title: string; tailing?: ReactElement }) => {
  return (
    <div className={`${style.header_container}`}>
      <div className={`$${style.header_leading}`}>
        <h4 className="text-white font-bold text-2xl md:text-3xl xl:text-4xl">{title}</h4>
      </div>
      <div className={`${style.header_actions}`}>{tailing}</div>
    </div>
  );
};

export default SectionHeader;
