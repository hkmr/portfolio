import SectionHeader from '@/components/SectionHeader';
import style from './style.module.css';
import StackCard from '@/components/stackCard';

const stackData = {
  data: [
    {
      title: 'Frontend Tech',
      description:
        'Experience working in frontend with javascript and typescript including framework React and Next JS.',
      icons: [
        '/assets/icons/next-js.svg',
        '/assets/icons/react-js.svg',
        '/assets/icons/typescript.svg',
        '/assets/icons/javascript.svg',
      ],
    },
    {
      title: 'Backend Tech',
      description:
        'Experience working in backend with java and javascript including framework Spring boot and Node(Nest Js).',
      icons: [
        '/assets/icons/spring-boot.svg',
        '/assets/icons/node.svg',
        '/assets/icons/java.svg',
        '/assets/icons/typescript.svg',
        '/assets/icons/javascript.svg',
      ],
    },
    {
      title: 'Product Design',
      description: 'Experience working in desiging using tools like Figma and Adobe xd',
      icons: ['/assets/icons/figma.svg', '/assets/icons/adobe-xd.svg'],
    },
  ],
};

const TechStackSection = () => {
  return (
    <section className={`w-full section_container relative ${style.section_container}`} id="tech">
      <SectionHeader
        title="Working Techstack"
        tailing={
          <>
            <span className="text-primary flex items-center flex-row-reverse md:flex-row" style={{ gap: '4px' }}>
              <hr style={{ width: '50px' }} />
              Technology
            </span>
            <p className="text-gray">The technologies expertise at and having experience</p>
          </>
        }
      />
      <div className={`${style.card_container}`}>
        {stackData.data.map((stack, idx) => {
          return <StackCard key={idx} title={stack.title} description={stack.description} icons={stack.icons} />;
        })}
      </div>
    </section>
  );
};

export default TechStackSection;
