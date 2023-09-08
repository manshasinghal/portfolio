import React from "react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { ImLocation2 } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import emailjs from 'emailjs-com';
import { useState } from "react";
export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r5s2iwg',"template_qx6u66p", e.target, 'tAjio6JZShSzTTJ0W')
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.log('Error sending email:', error.text);
    })

    setShowMessage(true);

    // Hide the "Message sent" div after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  e.target.reset();
  }
  return (
    <div className="bg-black text-white px-12 pb-12 pt-36" id='contact'>
      <div className="text-center mb-8">
        <p className="text-slate-200  font-semibold mb-4">GET IN TOUCH</p>
        <h1 className="text-3xl mb-4 font-extrabold ">CONTACT</h1>
        <div className="bg-green-400 w-[180px] h-[2px] m-auto"></div>
      </div>

      <div className="flex">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2.0 }}
          variants={{
            hidden: { opacity: 0, x: -90 },
            visible: { opacity: 1, x: 0 },
          }}
        >

       <div className="flex-col">
       {showMessage && (
        <div className="mb-14 text-center text-2xl  font-bold border-slate-400 text-black bg-slate-400 border-2 w-[300px] py-4 ml-4 lg:ml-20">Message sent</div>
      )}
        <p className="mb-4 font-extrabold ml-4">Message Me</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              className="p-2 text-black w-[300px] lg:w-[515px] border-[2px] rounded-md mb-4 mr-4"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-2 text-black w-[300px] lg:w-[515px] border-[2px] rounded-md mb-4 mr-4"
              required
            />
          </div>

          <div>
            <textarea
              className="p-2 text-black w-[300px] lg:w-[515px] h-[200px] border-[2px] rounded-md mb-4"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-green-400 text-black p-1  mt-4 w-[80px] hover:translate-y-[-2px] ease-in duration-300"
            >
              Send
            </button>
          </div>
        </form>
     
      </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2.0 }}
          variants={{
            hidden: { opacity: 0, x: 90 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="ml-32 mt-8">
            <div>
              <p className="text-lg font-extrabold">Contact Information</p>
              <p className="font-serif">
                Open for opportunities. Let's connect and build something
                awesome <br></br>together!
              </p>
            </div>
            <div className="flex justify-between mt-12 ">
              <div>
                <CgProfile className="text-4xl mb-8" />
                <ImLocation2 className="text-4xl mb-8" />
                <AiFillMail className="text-4xl" />
              </div>
              <div className="h-[200px] w-[2px] bg-green-400"></div>
              <div>
                <div className="mb-4">
                  <p className="text-lg font-extrabold">Name</p>
                  <p className="font-serif">Mansha Singhal</p>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-extrabold">Location</p>
                  <p className="font-serif">Shadara,Delhi</p>
                </div>

                <div>
                  <p className="text-lg font-extrabold">Email</p>
                  <a
                    href="mailto:manshasinghal04@gmail.com"
                    className="font-serif underline underline-offset-2"
                    target="blank"
                  >
                    manshasinghal04@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
