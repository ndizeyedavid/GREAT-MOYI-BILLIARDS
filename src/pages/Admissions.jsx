import { motion } from "framer-motion";
import { staggerContainer, fadeIn, scaleIn } from "../components/animations/Animate";
import Banner from "../components/Banner"
import Container from "../components/Container"
import NavigationBar from "../components/NavigationBar"
import Footer from "..//components/Footer"
import Overview from "../components/Overview"
import SectionHeader from "../components/SectionHeader"
import AdmissionCard from "../components/AdmissionCard"

const Admissions = () => {
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Banner />
      <NavigationBar />

      <Container>
        {/* Overview Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Overview title="Admission" heading="Join Our Family of Young Learners" details="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school" />
        </motion.div>

        {/* Admission process */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="Process" Heading="Admission Process">
            Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school
          </SectionHeader>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]"
          >
            {Array(6).fill(null).map((_, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
              >
                <AdmissionCard
                  step={`0${index + 1}`}
                  title={["Inquiry", "School Tour", "Application Form", "Parent Interview", "Student Assessment", "Acceptance"][index]}
                  details={[
                    "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
                    "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
                    "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
                    "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
                    "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
                    "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy."
                  ][index]}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Fee Structure */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="School Fees" Heading="Fee Structure">
            Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.
          </SectionHeader>

          {/* Custom table school fees */}
          <motion.div
            className="hidden lg:block p-[60px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800"
            variants={tableVariants}
          >
            <div className="overflow-hidden rounded-lg">

              <div className="grid grid-cols-5 mb-5 overflow-hidden text-sm font-semibold text-gray-700 border-2 border-black bg-primary-95 rounded-xl">
                <div className="px-6 py-4 border-r-2 border-black">Program</div>
                <div className="px-6 py-4 border-r-2 border-black">Age Group</div>
                <div className="px-6 py-4 border-r-2 border-black">Annual Tuition</div>
                <div className="px-6 py-4 border-r-2 border-black">Registration Fee</div>
                <div className="px-6 py-4 border-black">Activity Fee</div>
              </div>

              <div className="overflow-hidden border-2 border-black divide-y divide-gray-300 rounded-xl">
                <div className="grid grid-cols-5 text-gray-700 bg-white border-b-2 border-black">
                  <div className="px-6 py-4 border-r-2 border-black">Nursery</div>
                  <div className="px-6 py-4 border-r-2 border-black">2 - 3 Years</div>
                  <div className="px-6 py-4 border-r-2 border-black">$1,686</div>
                  <div className="px-6 py-4 border-r-2 border-black">$12</div>
                  <div className="px-6 py-4 border-r-2 border-black">$12</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional services */}
          <motion.div
            className="hidden lg:block p-[60px] mt-[60px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800"
            variants={tableVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="overflow-hidden rounded-lg">
              <div className="grid grid-cols-1 mb-5 overflow-hidden text-sm font-semibold text-gray-700 border-2 border-black bg-primary-95 rounded-xl">
                <div className="px-6 py-4 border-r-2 border-black text-[#191919] text-2xl font-bold ">Addition Services</div>
              </div>

              <div className="overflow-hidden border-2 border-black divide-y divide-gray-300 rounded-xl">
                <div className="grid grid-cols-2 text-gray-700 bg-white border-b-2 border-black">
                  <div className="px-6 py-4 border-r-2 border-black">Nursery</div>
                  <div className="px-6 py-4 border-r-2 border-black">2 - 3 Years</div>
                </div>
                <div className="grid grid-cols-2 text-gray-700 bg-white border-b-2 border-black">
                  <div className="px-6 py-4 border-r-2 border-black">Nursery</div>
                  <div className="px-6 py-4 border-r-2 border-black">2 - 3 Years</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <Footer />
      </Container>
    </>
  )
}

export default Admissions
