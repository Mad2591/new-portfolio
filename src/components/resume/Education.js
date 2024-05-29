import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Computer Application"
            subTitle="GVM's GGPR College of Commerce & Economics, Ponda - (2024)"
            result="Completed"
            des="Studied various aspects of computer applications, programming, and IT management."
          />
          <ResumeCard
            title="Diploma in Teacher Education"
            subTitle="KMS Adhyapak Vidyalay Mithbav, Devgad - (2012)"
            result="Completed"
            des="Completed a diploma focusing on teaching methodologies and educational practices."
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="B.M. Gogte College Shiroda Vengurla - (2010)"
            result="Completed"
            des="Completed higher secondary education with a focus on science and general studies."
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="S.F.X English Medium School Ajgaon - (2008)"
            result="Completed"
            des="Completed secondary school education with a focus on foundational academic subjects."
          />
        </div>
      </div>
      {/* part two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Office Assistant"
            subTitle="Yashaswi Academy for Skills - (27/03/2019 - 11/09/2020)"
            result="India"
            des="Provided administrative support, managed records, and assisted in daily office operations at Yashaswi Academy for Skills."
          />
          <ResumeCard
            title="Front Office Assistant"
            subTitle="Sanofi India Ltd - (08/03/2017 - 30/10/2018)"
            result="India"
            des="Managed front office tasks, customer service, and administrative support at Sanofi India Ltd."
          />
          <ResumeCard
            title="Assistant Teacher"
            subTitle="Matoshri Parvati Raut Vidyalay English Medium School - (20/05/2014 - 24/10/2017)"
            result="India"
            des="Taught various subjects and assisted with educational activities at Matoshri Parvati Raut Vidyalay English Medium School."
          />
          <ResumeCard
            title="Assistant Teacher"
            subTitle="Late Pri. R. R. Like English Medium School - (22/10/2012 - 02/05/2013)"
            result="India"
            des="Assisted in teaching and managed classroom activities at Late Pri. R. R. Like English Medium School."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
