"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../../src/app/globals.css";
import AnimatedPopup from "../../components/AnimatedPopup";

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
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-blue-600 animate-gradient bg-size-200 p-4 min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <AnimatedPopup animationType="popup">
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
              priority
            />
          </AnimatedPopup>

          <div className="text-center text-white">
            <AnimatedPopup animationType="tracking">
              <div className="mb-4">
                <h1 className="text-3xl font-bold">Hello,</h1>
                <h1 className="text-4xl font-bold">I'm HAREEM FAROOQI</h1>
                <h2 className="text-xl font-semibold">Web Developer & Designer</h2>
              </div>
            </AnimatedPopup>
            <AnimatedPopup animationType="focus">
              <p className="text-base md:text-lg text-gray-200">
                A passionate web developer and designer with expertise in creating
                beautiful, functional, and user-friendly websites. Specializing in
                modern web technologies and creative design solutions.
              </p>
            </AnimatedPopup>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow"
            >
              Learn More
            </a>
          </div>

          <div className="flex gap-4 mt-4">
            {[
              { href: "https://github.com", icon: faGithub },
              { href: "https://linkedin.com", icon: faLinkedin },
              { href: "https://instagram.com", icon: faInstagram },
            ].map(({ href, icon }) => (
              <Link
                key={href}
                href={href}
                className="text-white text-2xl hover:text-gray-300">
                <FontAwesomeIcon icon={icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
 

      <section id="about" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Alhamdulillah I am a dedicated professional with experience in social media management, graphic design, video editing, and web development. I have collaborated with global clients like Dr. Quran (UK), HSH Clothing (Canada), Sheraz Properties (Dubai), and Ansaarullah (Pakistan) to create visually compelling content and manage impactful digital strategies.
            </p>
            <p>
              Alhamdulillah With a solid foundation in programming languages like C, C#, C++, Java, JavaScript, TypeScript, HTML, and CSS. Currently, I am expanding my knowledge in generative AI and Cloud Computing to further enhance my skill set In Shaa Allah.
            </p>
            <p>
              Passionate about continuous learning, I aim to contribute my diverse expertise in web development, design, and social media management to deliver creative and effective solutions In Shaa Allah.
            </p>
          </div>
          <a href="#contact" className="mt-8 inline-block py-3 px-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Contact Me
          </a>
        </div>
      </section>

      <section id="skills" className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.title} className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="flex flex-col bg-gray-200 text-gray-800 py-16 text-center">
          <div className="flex flex-col max-w-[90%] mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold uppercase text-gray-800">Education</h2>
              <div className="w-40 h-1 bg-blue-600 mx-auto my-2"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-900 to-purple-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 italic">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section id="experience" className="flex flex-col py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold uppercase">Experience</h2>
            <div className="w-44 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="bg-gray-50 p-7 rounded-md border-l-4 border-blue-600 shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900">{exp.company}</h3>
                <p className="text-blue-600 font-semibold">{exp.role}</p>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-gray-100 w-full py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold uppercase">Portfolio</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PortfolioCard.map((card) => (
              <div
                key={card.title}
                className="bg-gradient-to-tr from-gray-800 to-purple-600 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Link href={card.link} target="_blank">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover transition duration-300 grayscale hover:grayscale-0"
                  />
                </Link>
                <div className="p-4 text-center">
                  <h3 className="text-teal-400 font-semibold uppercase">{card.title}</h3>
                  <p className="text-gray-300 mt-2">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      `<section id="contact" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold uppercase">Contact Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold">Get In Touch</h3>
              <p className="text-gray-600 my-4">
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:hareemfarooqi2134@gmail.com" className="text-blue-600 hover:underline">
                      hareemfarooqi2134@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                    📱
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <a href="tel:+923242762668" className="text-blue-600 hover:underline">
                      +92 324 2762668
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link
                  href="https://github.com"
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Message</label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows={5}></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
`</>
  );
}
