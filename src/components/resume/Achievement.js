import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Accomplishments</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secured 2nd Place in Semester 3"
            subTitle="GVM's GGPR College of Commerce & Economics, Ponda - (2022)"
            result="Achievement"
            des="Achieved 2nd place in the third semester, demonstrating academic excellence and dedication."
          />
          <ResumeCard
            title="Google UI/UX Designer Course"
            subTitle="Google - (2024)"
            result="Certified"
            des="Completed the Google UI/UX designer course, gaining valuable skills in user interface and user experience design."
          />
          <ResumeCard
            title="Certified by TataStrive"
            subTitle="TataStrive - (2024)"
            result="Certified"
            des="Received certification from TataStrive, showcasing proficiency and commitment to professional development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
