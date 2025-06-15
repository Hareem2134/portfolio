"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../../src/app/globals.css";
import AnimatedPopup from "../../components/AnimatedPopup";
import ScrollAnimate from "../../components/ScrollAnimate";

// ... (skills, education, experiences, PortfolioCard arrays remain the same)
const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C#", "C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Web Development",
    items: ["DreamWeaver", "Wordpress", "React.js", "Next.js"]
  },
  {
    title: "Social Media Management",
    items: ["Instagram", "Facebook", "TikTok", "YouTube", "Pinterest", "X"]
  },
  {
    title: "Design",
    items: ["Photoshop", "Illustrator", "Premiere Pro"]
  },
  {
    title: "3D Game Development",
    items: ["Unity3D", "Unreal Engine"]
  },
  {
    title: "Digital Marketing",
    items: ["SEO", "Content Marketing", "Social Media Marketing"]
  }
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "UBIT KARACHI UNIVERSITY",
    year: "2014 - 2017"
  },
  {
    degree: "Web Development",
    institution: "MEMON FOUNDATION",
    year: "2014"
  },
  {
    degree: "Graphic Designing",
    institution: "MEMON FOUNDATION",
    year: "2014"
  },
  {
    degree: "Video Editing",
    institution: "MEMON FOUNDATION",
    year: "2014"
  },
  {
    degree: "Android App Development",
    institution: "SIR SYED UNIVERSITY",
    year: "2016"
  },
  {
    degree: "Game Development",
    institution: "Software House",
    year: "2016"
  },
  {
    degree: "Linux Fundamentals",
    institution: "NED UNIVERSITY",
    year: "2016"
  },
  {
    degree: "Generative AI & Cloud Computing",
    institution: "Governor House",
    year: "Currently - 2026 In Shaa Allah"
  }
];

const experiences = [
  {
    company: "Dr. Quran (UK)",
    role: "Social Media Manager & Web Developer",
    description: "Led social media strategy and web development initiatives"
  },
  {
    company: "HSH Clothing (Canada)",
    role: "Social Media Manager & Web Developer",
    description: "Managed online presence and e-commerce development"
  },
  {
    company: "Sheraz Properties (Dubai)",
    role: "Social Media Manager",
    description: "Handled digital marketing and social media campaigns"
  },
  {
    company: "Ansaarullah (Pakistan)",
    role: "Web Developer",
    description: "Developed and maintained web applications"
  }
];

const PortfolioCard = [
  {
    image: "/1.png",
    title: "Multipage Website",
    description: "A beautiful Multipage Ecommerce Website",
    link: "https://multipage-website-custom-css.vercel.app/"
  },
  {
    image: "/2.png",
    title: "Figma to HTML website",
    description: "Converted Figma Design to HTML",
    link: "https://figma-to-html-assignment-class7-19thoct.vercel.app/"
  },
  {
    image: "/3.png",
    title: "Resume (Nextjs)",
    description: "My Resume in Nextjs",
    link: "https://personal-resume-assignment-12oct.vercel.app/"
  },
  {
    image: "/4.png",
    title: "Static Resume (HTML CSS)",
    description: "A stunning portfolio website",
    link: "https://static-resume-by-hareemfarooqi.vercel.app/"
  },
  {
    image: "/5.png",
    title: "Dynamic Resume (HTML CSS)",
    description: "Dynamic Resume in HTML CSS",
    link: "https://dynamic-resume-five-alpha.vercel.app/"
  },
  {
    image: "/6.png",
    title: "Simple Calculator",
    description: "A Simple Calculator in Typescript",
    link: "https://github.com/Hareem2134/simple-calculator"
  },
  {
    image: "/7.png",
    title: "Student Management System",
    description: "Student Management System in Typescript",
    link: "https://github.com/Hareem2134/Student-Management-System"
  },
  {
    image: "/9.png",
    title: "Currency Converter",
    description: "Currency Converter in Typescript",
    link: "https://github.com/Hareem2134/Currency-Converter"
  },
  {
    image: "/8.png",
    title: "ATM App",
    description: "ATM Application in Typescript",
    link: "https://github.com/Hareem2134/ATM"
  }
];


export default function Home() {
  return (
    <>
      <div id="home" className="bg-white">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 animate-gradient bg-size-200 p-4 min-h-screen relative overflow-hidden">
          {/* Added pt-24 (96px) to this div to account for fixed navbar height */}
          <div className="flex flex-col items-center gap-6 z-10 pt-24 md:pt-28"> 
            <AnimatedPopup animationType="popup">
              <Image
                src="/profile.jpg"
                alt="Profile Image"
                width={200}
                height={200}
                className="rounded-full shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </AnimatedPopup>

            <div className="text-center text-white">
              <AnimatedPopup animationType="tracking">
                <div className="mb-4">
                  <h1 className="text-3xl sm:text-4xl font-bold">Hello,</h1>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">I'm HAREEM FAROOQI</h1>
                  <h2 className="text-xl sm:text-2xl font-semibold text-blue-300 mt-1">Web Developer & Designer</h2>
                </div>
              </AnimatedPopup>
              <AnimatedPopup animationType="focus">
                <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto">
                  A passionate web developer and designer with expertise in creating
                  beautiful, functional, and user-friendly websites. Specializing in
                  modern web technologies and creative design solutions.
                </p>
              </AnimatedPopup>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg font-medium hover-pulse"
              >
                Contact Me
              </a>
              <a
                href="#about"
                className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg font-medium hover-pulse"
              >
                Learn More
              </a>
            </div>

            <div className="flex gap-6 mt-6">
              {[
                { href: "https://github.com/Hareem2134", icon: faGithub, label: "GitHub" },
                { href: "https://linkedin.com", icon: faLinkedin, label: "LinkedIn" },
                { href: "https://instagram.com", icon: faInstagram, label: "Instagram" },
              ].map(({ href, icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white text-3xl hover:text-blue-300 transform hover:scale-125 transition-transform duration-300"
                >
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimate animationClass="animate-fadeInUp" className="mb-2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">About Me</h2>
          </ScrollAnimate>
          <ScrollAnimate animationClass="animate-underline-draw" className="mb-8">
             <div className="title-underline"></div>
          </ScrollAnimate>
          <div className="text-lg text-gray-700 space-y-6">
            <ScrollAnimate animationClass="animate-fadeInUp" delay="0.1s">
              <p>
                Alhamdulillah I am a dedicated professional with experience in social media management, graphic design, video editing, and web development. I have collaborated with global clients like Dr. Quran (UK), HSH Clothing (Canada), Sheraz Properties (Dubai), and Ansaarullah (Pakistan) to create visually compelling content and manage impactful digital strategies.
              </p>
            </ScrollAnimate>
            <ScrollAnimate animationClass="animate-fadeInUp" delay="0.2s">
              <p>
                Alhamdulillah With a solid foundation in programming languages like C, C#, C++, Java, JavaScript, TypeScript, HTML, and CSS. Currently, I am expanding my knowledge in generative AI and Cloud Computing to further enhance my skill set In Shaa Allah.
              </p>
            </ScrollAnimate>
            <ScrollAnimate animationClass="animate-fadeInUp" delay="0.3s">
              <p>
                Passionate about continuous learning, I aim to contribute my diverse expertise in web development, design, and social media management to deliver creative and effective solutions In Shaa Allah.
              </p>
            </ScrollAnimate>
          </div>
          <ScrollAnimate animationClass="animate-fadeInUp" delay="0.4s">
            <a href="#contact" className="mt-10 inline-block py-3 px-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-lg">
              Let's Connect
            </a>
          </ScrollAnimate>
        </div>
      </section>

      <section id="skills" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimate animationClass="animate-fadeInUp" className="mb-2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">Skills</h2>
          </ScrollAnimate>
          <ScrollAnimate animationClass="animate-underline-draw" className="mb-12">
             <div className="title-underline"></div>
          </ScrollAnimate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <ScrollAnimate 
                key={skillGroup.title} 
                animationClass="animate-popIn"
                delay={`${index * 0.1}s`}
              >
                {/* Updated gradient for skills cards */}
                <div className="bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-700 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-4">{skillGroup.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors duration-200 cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-16 md:py-24 bg-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollAnimate animationClass="animate-fadeInUp" className="mb-2">
              <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">Education</h2>
            </ScrollAnimate>
            <ScrollAnimate animationClass="animate-underline-draw" className="mb-12">
               <div className="title-underline"></div>
            </ScrollAnimate>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <ScrollAnimate 
                  key={index} 
                  animationClass="animate-fadeInUp" 
                  delay={`${index * 0.1}s`}
                  className="h-full"
                >
                  <div
                    className="bg-gradient-to-r from-blue-700 to-purple-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-200">{edu.institution}</p>
                    </div>
                    <p className="text-blue-300 italic mt-3">{edu.year}</p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
      </section>

      <section id="experience" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimate animationClass="animate-fadeInUp" className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">Experience</h2>
          </ScrollAnimate>
          <ScrollAnimate animationClass="animate-underline-draw" className="text-center mb-12">
             <div className="title-underline"></div>
          </ScrollAnimate>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <ScrollAnimate 
                key={exp.company} 
                animationClass={index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight"} 
                delay={`${index * 0.1}s`}
              >
                <div
                  className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-blue-600 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-blue-600 font-semibold text-lg mt-1">{exp.role}</p>
                  <p className="text-gray-700 mt-3 text-base">{exp.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-gray-100 w-full py-16 md:py-24">
        <div className="container mx-auto">
          <ScrollAnimate animationClass="animate-fadeInUp" className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">Portfolio</h2>
          </ScrollAnimate>
          <ScrollAnimate animationClass="animate-underline-draw" className="text-center mb-12">
             <div className="title-underline"></div>
          </ScrollAnimate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PortfolioCard.map((card, index) => (
              <ScrollAnimate 
                key={card.title} 
                animationClass="animate-popIn"
                delay={`${index * 0.1}s`}
                className="h-full"
              >
              <div
                className="bg-gradient-to-br from-gray-800 via-purple-700 to-indigo-800 rounded-lg shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col overflow-hidden h-full group"
              >
                <Link href={card.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400} 
                    height={300}
                    className="w-full h-56 object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                </Link>
                <div className="p-6 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-400 uppercase tracking-wider">{card.title}</h3>
                    <p className="text-gray-300 mt-2 text-sm">{card.description}</p>
                  </div>
                  <Link href={card.link} target="_blank" rel="noopener noreferrer" 
                    className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">
                    View Project →
                  </Link>
                </div>
              </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <ScrollAnimate animationClass="animate-fadeInUp" className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">Contact Me</h2>
          </ScrollAnimate>
          <ScrollAnimate animationClass="animate-underline-draw" className="text-center mb-12">
            <div className="title-underline"></div>
          </ScrollAnimate>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <ScrollAnimate animationClass="animate-fadeInLeft" delay="0.1s">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Get In Touch</h3>
                <p className="text-gray-600 my-4 text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </p>
                <div className="space-y-6 mt-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl group-hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-110">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <a href="mailto:hareemfarooqi2134@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                        hareemfarooqi2134@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl group-hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-110">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Phone</h4>
                      <a href="tel:+923242762668" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                        +92 324 2762668
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-5 mt-8">
                  <Link
                    href="https://github.com/Hareem2134" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl hover:bg-black transform hover:scale-110 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link
                    href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl hover:bg-blue-800 transform hover:scale-110 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link
                    href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center text-xl hover:opacity-80 transform hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </div>
              </div>
            </ScrollAnimate>
            
            <ScrollAnimate animationClass="animate-fadeInRight" delay="0.2s">
              <div className="bg-gray-50 rounded-lg shadow-xl p-6 sm:p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
                      rows={5}
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>
    </>
  );
}