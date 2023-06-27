import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationList = ({index, education }) => {
    return (
      <div key={index} className='mb-10'>
        <h2>{education.title}</h2>
        <p>
            <strong>Department:</strong> {education.department}
        </p>
        <p>
            <strong>Research Areas:</strong> {education.research_areas}
        </p>
        <p>
            <strong>University / Issuing Body:</strong> {education.university}
        </p>
        <p>
            <strong>Issue Date:</strong> {education.issue_date}
        </p>
        {education.link && (
            <p>
              <strong>Link:</strong>{' '}
              <a href={education.link} target="_blank" rel="noopener noreferrer">
                View certificate
              </a>
            </p>
        )}
        {/* <p>
            <strong>Link:</strong>{' '}
            <a href={education.link} target="_blank" rel="noopener noreferrer">
                View certificate
            </a>
        </p> */}
      </div>
    );
  };

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const Education = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>The professional education I've received so far</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className='mt-20 flex-column flex-wrap gap-10'>
        {educations.map((education, index) => (
          <EducationList key={education.title} index={index} education={education} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
