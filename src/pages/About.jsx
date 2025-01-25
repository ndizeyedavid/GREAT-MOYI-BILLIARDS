// another misery of creating like a million new components. FUCKKKKKKKKKKKKKKK!!!!!!!!!!!!!!!1🤬😡 

import Banner from "../components/Banner"
import Container from "../components/Container"
import NavigationBar from "../components/NavigationBar"
import Footer from "..//components/Footer"
import Overview from "../components/Overview"
import SectionHeader from "../components/SectionHeader"
import AboutCard from "../components/AboutCard"
import Card from "../components/Card"
import TeamCard from "../components/TeamCard"
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideFromLeft, slideFromRight, scaleIn } from "../components/animations/Animate";

// icons
import Mission from "/assets/icons/mountain.svg";
import Vision from "/assets/icons/binocular.svg";
import Chart from "/assets/icons/chart.svg";
import Pie from "/assets/icons/pie.svg"
import Thunder from "/assets/icons/thunder.svg"

// images
import Teacher1 from "/assets/users/male-1.svg";
import Teacher2 from "/assets/users/female-1.svg";
import Teacher3 from "/assets/users/male-1.svg";
import Teacher4 from "/assets/users/male-2.svg";
import Teacher5 from "/assets/users/male-1.svg";
import Teacher6 from "/assets/users/male-1.svg";
import Teacher7 from "/assets/users/female-1.svg";
import Teacher8 from "/assets/users/female-1.svg";
import Teacher9 from "/assets/users/male-2.svg";

function About() {
  return (
    <>
      <Banner />
      <NavigationBar />

      <Container>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Overview title="Overview" heading="Welcome to Little Learners Academy" details="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential." />
        </motion.div>

        {/* Missions and visions✅ */}
        <motion.section
          id="mission-vision"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="Mission & Visions" Heading="Our Mission and Visions">
            We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-rows-1 gap-5 lg:grid-cols-2"
          >
            <motion.div variants={slideFromLeft}>
              <AboutCard icon={Mission} title="Mission" details="At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey." />
            </motion.div>
            <motion.div variants={slideFromRight}>
              <AboutCard icon={Vision} title="Vision" details="Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity." />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Awards and recognition✅ */}
        <motion.section
          id="awards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="Our Achievement" Heading="Our Awards and Recognitions">
            ESSA Nyarugunga takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]"
          >
            {[Pie, Chart, Thunder].map((icon, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
              >
                <Card category="aboutpage" icon={icon} heading="Outstanding Early Childhood Education Awar" details="Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment." />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Team Members✅ */}
        <motion.section
          id="teachers"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <SectionHeader semiHeading="Our Teachers with Experties" Heading="Our Team Members">
            At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-rows-1 lg:grid-cols-2 gap-6 p-8 gap-y-[70px]"
          >
            <TeamCard name="Clara Angel" image={Teacher1} qualification="Bachelor's Degree in Early Childhood Education" />
            <TeamCard name="Jorge Isabel" image={Teacher2} qualification="Master's Degree in Elementary Education" />
            <TeamCard name="Ronald Jeff" image={Teacher3} qualification="Diploma in Child Psychology" />
            <TeamCard name="Dennis Lester" image={Teacher9} qualification="Bachelor's Degree in Database Management" />
            <TeamCard name="Leila Sean" image={Teacher4} qualification="Bachelor's Degree in Physical Education" />
            <TeamCard name="Mathilda Kenneth" image={Teacher5} qualification="Bachelor's Degree in Physical Education" />
            <TeamCard name="Clifford Luella" image={Teacher6} qualification="Master's Degree in Special Education" />
            <TeamCard name="Paul Jackson" image={Teacher7} qualification="Bachelor's Degree in Fine Arts" />
            <TeamCard name="Barbara Daniel" image={Teacher8} qualification="Bachelor's Degree in Software Engineering" />
            <TeamCard name="Lucille Miguel" image={Teacher9} qualification="Bachelor's Degree in Database Management" />
          </motion.div>
        </motion.section>
        <Footer />
      </Container>
    </>
  )
}

export default About

// Thank Lord About page is finally done😮‍💨