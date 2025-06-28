import Image from 'next/image';

export type TimelinePropsType = {
  items: {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    logo?: string;
  }[];
};

const TimeLine = ({ data }: { data: TimelinePropsType }) => {
  return (
    <div>
      <ol className="items-center sm:flex">
        {data.items.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              description={item.description}
              logo={item.logo}
            />
          );
        })}
      </ol>
    </div>
  );
};

const TimelineItem = ({
  title,
  subtitle,
  date,
  description,
  logo,
}: {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  logo?: string;
}) => {
  return (
    <li className="timeline relative mb-6 sm:mb-0" style={{ minWidth: '30%' }}>
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-white rounded-full ring-0 ring-gray sm:ring-8 shrink-0">
          {logo ? (
            <Image src={logo} height={20} width={20} alt={title} />
          ) : (
            <svg
              className="w-3 h-3 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          )}
        </div>
        <div className="hidden sm:flex w-full border-2 border-primary"></div>
      </div>
      <div className="mt-3 sm:pe-8">
        <h3 className="text-xl font-semibold text-white mt-4 mb-0">{title}</h3>
        <h5 className="text-md font-semibold text-slate-500 mb-3">{subtitle}</h5>
        <time className="block mb-2 font-normal text-white">{date}</time>
        <p className="text-sm font-normal text-gray">{description}</p>
      </div>
    </li>
  );
};

export default TimeLine;
