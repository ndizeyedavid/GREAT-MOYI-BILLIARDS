import Banner from "../components/Banner"
import Container from "../components/Container"
import NavigationBar from "../components/NavigationBar"
import Footer from "..//components/Footer"
import Overview from "../components/Overview"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideFromLeft, slideFromRight } from "../components/animations/Animate";

// more stupid components will be daFuq here
import StudentLifeCard from "../components/StudentsLifeCard"

// suprizingly here comes the icons, wait I'm even doing it the right way????

// icons
import Thunder from "/assets/icons/thunder.svg";
import Paint from "/assets/icons/paint.svg";
import Music from "/assets/icons/music.svg";
import Puzzle from "/assets/icons/puzzle.svg";
import Lab from "/assets/icons/lab.svg";
import Magic from "/assets/icons/stars.svg";
import Book from "/assets/icons/book.svg";
import People from "/assets/icons/people-2.svg";

// sample image
import Test from '/assets/hero.webp'


function StudentLife() {
  return (
    <>
      <Banner />
      <NavigationBar />

      <Container>

        {/* Overview Section✅ */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Overview title="Enriching Student Life" heading="Embracing Learning with Discovery and Joy" details="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development." />
        </motion.div>

        {/* Extracurricular Activities✅ */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="Fun & Activities" Heading="Extracurricular Activities">
            At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]"
          >
            {[Thunder, Paint, Music, Puzzle, Lab, Magic].map((icon, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
              >
                <Card category="about" icon={icon} heading="Sports and Athletics" details="Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline." />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Events and celebrations✅ */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="our Achievements" Heading="Events & Celebrations">
            At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]"
          >
            {Array(6).fill(null).map((_, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <StudentLifeCard image={Test} title="Annual Sports Day" details="A day filled with friendly competition, team spirit, and sportsmanship." />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* student support✅ */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="Support" Heading="Student Support">
            At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]"
          >
            {[Magic, Book, People].map((icon, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <Card category="about" icon={icon} heading="Counseling" details="Professional counselors offer guidance and support to students, addressing their emotional and social well-being." />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <Footer />

      </Container>

    </>
  )
}

export default StudentLife
