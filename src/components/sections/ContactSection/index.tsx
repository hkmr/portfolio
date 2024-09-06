import Link from "next/link";
import style from "./style.module.css";

const ContactSection = () => {
  return (
    <section className={`w-full section_container border-l-8 border-primary bg-deepGray ${style.section_container}`}>
      <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
        <div>
          <h4 className="text-white text-2xl md:text-3xl font-bold">Have any project in mind ?</h4>
          <p className="text-gray md:text-xl mt-2">Feel free to contact me or just say friendly hello!</p>
        </div>
        <div>
          <Link href="mailto:harshkmr991234@gmail.com" className="text-white bg-primary px-4 py-2">Contact Me</Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
