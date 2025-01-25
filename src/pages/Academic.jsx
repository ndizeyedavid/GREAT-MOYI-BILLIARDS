// guess what? I'm fucking away from finishing this shit

import Banner from "../components/Banner"
import Container from "../components/Container"
import NavigationBar from "../components/NavigationBar"
import Footer from "..//components/Footer"
import Overview from "../components/Overview"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"
import AcademicCard from "../components/AcademicCard"

// icons
import Book from "/assets/icons/book.svg";
import Graph from "/assets/icons/chart.svg";
import Puzzle from "/assets/icons/puzzle.svg";
import Paint from "/assets/icons/paint.svg";
import Sun from "/assets/icons/sun.svg";
import Star from "/assets/icons/star.svg";

// Images
import Test from '/assets/hero.webp'

// gallery blocks
import Classrooms from "../components/Carousel/Classrooms"
import Library from "../components/Carousel/Library"
import Computerlab from "../components/Carousel/Computerlab"
import Playgrounds from "../components/Carousel/Playgrounds"

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideFromLeft, slideFromRight } from "../components/animations/Animate";
import SingleImage from "../components/SingleImage"

function Academic() {
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
          <Overview title="Academics" heading="Nurturing Young Minds for Success" details="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration." />
        </motion.div>

        {/* Special features✅ */}
        <motion.section
          id="special-features"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="Our Features" Heading="Our Special Features">
            Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]"
          >
            {[Book, Graph, Puzzle, Paint, Sun, Star].map((icon, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                whileHover={{ scale: 1.05 }}
              >
                <Card category="" icon={icon} heading="Thematic Learning" details="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant." />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* what students learn✅ */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="Education Standard" Heading="What Students Learn">
            At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full justify-center items-center grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]"
          >
              <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }}>
                <AcademicCard image="/assets/hero.webp" title="Software Development" details="Reading, writing, storytelling, and communication in codes." />
              </motion.div>
              
              <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }}>
                <AcademicCard image="/assets/hero.webp" title="Computer system architecture" details="Reading, writing, storytelling, and communication in codes." />
              </motion.div>

              <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }}>
                <AcademicCard image="/assets/hero.webp" title="Accounting" details="Reading, writing, storytelling, and communication in codes." />
              </motion.div>

              <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }}>
                <AcademicCard image="/assets/hero.webp" title="Tourism and hospitality" details="Reading, writing, storytelling, and communication in codes." />
              </motion.div>

              <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }}>
                <AcademicCard image="/assets/hero.webp" title="Food and beverage operations" details="Reading, writing, storytelling, and communication in codes." />
              </motion.div>

              <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }}>
                <AcademicCard image="/assets/hero.webp" title="Ordinary Level" details="Reading, writing, storytelling, and communication in codes." />
              </motion.div>

          </motion.div>
        </motion.section>

        {/* gallery✅ */}
        <motion.section
          id="gallery"
          className="hidden lg:block"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          <SectionHeader semiHeading="Our Gallery" Heading="Our School Gallery">
            Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our high school.
          </SectionHeader>

          {/* school images categorized✅ */}
          <div className="grid grid-cols-4 gap-y-5">
            <SingleImage img="/assets/hero.webp" alt="School compound" />
            <SingleImage img="/assets/hero.webp" alt="School compound" />
            <SingleImage img="/assets/hero.webp" alt="School compound" />
            <SingleImage img="/assets/hero.webp" alt="School compound" />
            <SingleImage img="/assets/hero.webp" alt="School compound" />
            <SingleImage img="/assets/hero.webp" alt="School compound" />
            <SingleImage img="/assets/hero.webp" alt="School compound" />
            <SingleImage img="/assets/hero.webp" alt="School compound" />
          </div>

        </motion.section>



        {/* footer✅ */}
        <Footer />

      </Container>


    </>
  )
}

export default Academic
