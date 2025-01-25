import Banner from "../components/Banner"
import Container from "../components/Container"
import NavigationBar from "../components/NavigationBar"
import Footer from "..//components/Footer"
import ContactOverview from "../components/ContactOverview"
import SectionHeader from "../components/SectionHeader"
import FormInput from "../components/FormInput"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, scaleIn } from "../components/animations/Animate";

// icons
import Facebook from "/assets/icons/facebook.svg"
import Twitter from "/assets/icons/twitter.svg"
import LinkedIn from "/assets/icons/linkedin.svg"

function ContactUs() {
  return (
    <>
      <Banner />
      <NavigationBar />

      <Container>
        <motion.div id="direction"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <ContactOverview title="Contact Us" heading="Feel Free To Connect With Us" details="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods" />
        </motion.div>

        <motion.section
          id="information"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader semiHeading="Contact & Registration Form" Heading="Student Information">
            If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs
          </SectionHeader>

          <motion.div
            variants={scaleIn}
            className="relative px-[20px] lg:px-[100px] pt-[120px] pb-[100px] bg-white rounded-xl shadow-[8px_8px_0px_1px_rgba(30,30,30,1.00)] border-2 border-neutral-800"
          >
            {/* SOCIAL BUTTONS */}
            <motion.div
              variants={staggerContainer}
              className="absolute -top-12 right-0 left-0 mx-auto p-2 w-[50%] h-[100px] flex items-center justify-center gap-[20px]"
            >
              {[Facebook, Twitter, LinkedIn].map((icon, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link to="#" target="_blank" className="h-13 px-6 py-4 bg-[#ffdecc] rounded-lg border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">
                    <img src={icon} className="object-cover" alt="Social Icon" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.form
              variants={fadeIn}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-[50px]">
                {/* Input field */}
                <FormInput label="Parent Name" placeholder="Enter Parent Name" name="ParentName" type="text" />
                <FormInput label="Email Address" placeholder="Enter Email address" name="emailAddress" type="email" />
                <FormInput label="Phone Number" placeholder="Enter Phone Number" name="phoneNumber" type="text" />
                <FormInput label="Student Name" placeholder="Enter Student Name" name="studentName" type="text" />
                <FormInput label="Student Age" placeholder="Enter Student Age" name="studentAge" type="number" />
                <FormInput label="Program of interest" placeholder="Select Trade" name="appliedTrade" type="select" />

              </div>
              <div className="mt-[30px]">
                <FormInput label="Message" placeholder="Enter your Message" name="message" type="textarea" />
              </div>

              <input type="submit" value="Send" className="mt-[30px] w-full px-[32px] py-[20px] bg-[#ffad7f] rounded-xl border-2 border-neutral-800 cursor-pointer transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]" />
            </motion.form>

          </motion.div>

        </motion.section>

        <Footer />
      </Container>
    </>
  )
}

export default ContactUs
