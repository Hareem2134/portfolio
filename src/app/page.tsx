// src/app/page.tsx
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../../src/app/globals.css";
import AnimatedPopup from "../../components/AnimatedPopup";

gsap.registerPlugin(ScrollTrigger);

// --- Data Arrays ---
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
    description: "Led social media strategy and web development initiatives for Dr. Quran, focusing on enhancing their online presence and engagement across various platforms. Developed and maintained their primary website, ensuring optimal performance and user experience."
  },
  {
    company: "HSH Clothing (Canada)",
    role: "Social Media Manager & Web Developer",
    description: "Managed the complete online presence for HSH Clothing, including e-commerce website development and social media marketing campaigns. Implemented strategies to boost brand visibility and drive online sales in the competitive Canadian fashion market."
  },
  {
    company: "Sheraz Properties (Dubai)",
    role: "Social Media Manager",
    description: "Handled comprehensive digital marketing and social media campaigns for Sheraz Properties. Focused on creating engaging content and targeted advertising to attract potential clients and elevate the brand's profile in the Dubai real estate sector."
  },
  {
    company: "Ansaarullah (Pakistan)",
    role: "Web Developer",
    description: "Developed and maintained several web applications for Ansaarullah, an organization in Pakistan. Ensured robust functionality, security, and scalability of their digital platforms to support their operational needs."
  }
];

const PortfolioCard = [
  {
    image: "/01.png",
    title: "Restaurant Ecommerce Website",
    description: "A comprehensive online ordering system and promotional website designed to empower restaurants with a powerful digital presence. Built with Next.js, it prioritizes speed, user engagement, and ease of management.",
    link: "https://restaurant-ecommerce-website.vercel.app/"
  },
  {
    image: "/02.png",
    title: "Admin Panel of Restaurant Ecommerce Website",
    description: "This admin panel project provides comprehensive e-commerce management, featuring product CRUD, bulk CSV uploads, order processing, discount creation, and an insightful dashboard with earnings charts.",
    link: "https://admin-restaurant-ecommerce-website.vercel.app/"
  },
  {
    image: "/03.png",
    title: "Dynamic E-commerce Website",
    description: "Full-Stack E-commerce Site with Next.js, Sanity & Stripe: A dynamic e-commerce web application built with React and Next.js, featuring API integration, Sanity for content and Stripe for payments.",
    link: "https://fullstack-ecommerce-with-nextjs-sanity-stripe.vercel.app/"
  },
  {
    image: "/04.png",
    title: "One Page Landing Website",
    description: "One Page Landing Website designed for businesses. Built with React and TypeScript for a high-performance, maintainable, and modern solution.",
    link: "https://visual-mind-map.vercel.app/"
  },
  {
    image: "/05.png",
    title: "Unit Converter",
    description: "A simple and interactive unit converter built with Streamlit and Pint. Supports multiple categories like Length, Weight, Temperature, and more.",
    link: "https://unit-converter-by-hareemfarooqi.streamlit.app/"
  },
  {
    image: "/06.png",
    title: "Password Strength Meter",
    description: "A Streamlit-based web app that evaluates password security in real-time. It provides instant feedback, a strength indicator, a custom password generator, and essential security tips.",
    link: "https://password-strength-meter-by-hareemfarooqi.streamlit.app/"
  },
  {
    image: "/07.png",
    title: "Personal Library Manager",
    description: "A command-line app to add, remove, search, and manage books while tracking your reading progress. Books are saved automatically with CLI (library.txt) and Streamlit (library.json), ensuring persistent storage for future use.",
    link: "https://personal-library-manager-by-hareemfarooqi.streamlit.app/"
  },
  {
    image: "/08.png",
    title: "Data Sweeper",
    description: "A Streamlit app for cleaning, transforming, and converting Excel/CSV files. Features include removing duplicates, filling missing values, renaming columns, filtering, sorting, merging datasets, and exporting to CSV/Excel. Built with Python, Pandas, and Streamlit.",
    link: "https://data-sweeper-by-hareemfarooqi.streamlit.app/"
  },
  {
    image: "/1.png",
    title: "Multipage Website",
    description: "A beautiful Multipage Ecommerce Website, meticulously crafted with custom CSS to provide a unique and engaging user experience for online shoppers.",
    link: "https://multipage-website-custom-css.vercel.app/"
  },
  {
    image: "/2.png",
    title: "Figma to HTML website",
    description: "Successfully converted a complex Figma design into a pixel-perfect, responsive HTML and CSS website, ensuring fidelity to the original visual concept.",
    link: "https://figma-to-html-assignment-class7-19thoct.vercel.app/"
  },
  {
    image: "/3.png",
    title: "Resume (Nextjs)",
    description: "My personal resume built using Next.js, showcasing skills in modern JavaScript frameworks and server-side rendering for optimal performance.",
    link: "https://personal-resume-assignment-12oct.vercel.app/"
  },
  {
    image: "/4.png",
    title: "Static Resume (HTML CSS)",
    description: "A stunning and clean static portfolio website developed purely with HTML and CSS, demonstrating foundational web development capabilities.",
    link: "https://static-resume-by-hareemfarooqi.vercel.app/"
  },
  {
    image: "/5.png",
    title: "Dynamic Resume (HTML CSS)",
    description: "An interactive and dynamic resume created with HTML and CSS, incorporating engaging elements to highlight professional experience and skills.",
    link: "https://dynamic-resume-five-alpha.vercel.app/"
  },
  {
    image: "/6.png",
    title: "Simple Calculator",
    description: "A functional Simple Calculator application built with TypeScript, emphasizing strong typing and logical problem-solving in a common utility.",
    link: "https://github.com/Hareem2134/simple-calculator"
  },
  {
    image: "/7.png",
    title: "Student Management System",
    description: "Developed a comprehensive Student Management System using TypeScript, designed to handle student data efficiently and securely.",
    link: "https://github.com/Hareem2134/Student-Management-System"
  },
  {
    image: "/9.png",
    title: "Currency Converter",
    description: "A practical Currency Converter tool implemented in TypeScript, fetching real-time exchange rates to provide accurate conversions.",
    link: "https://github.com/Hareem2134/Currency-Converter"
  },
  {
    image: "/8.png",
    title: "ATM App",
    description: "A simulated ATM Application built with TypeScript, demonstrating object-oriented programming principles and transaction logic.",
    link: "https://github.com/Hareem2134/ATM"
  }
];

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGsap = () => {
      const ctx = gsap.context(() => {
        const createEnterStayAnimation = (
          targets: string | HTMLElement[], 
          initialVars: gsap.TweenVars = { opacity: 0, y: 40 },
          animVars: gsap.TweenVars = { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          staggerAmount: number = 0.1,
          startCondition: string = "top bottom-=30%"
        ) => {
          gsap.utils.toArray<HTMLElement>(targets).forEach((target, index) => {
            gsap.set(target, initialVars);
            ScrollTrigger.create({
              trigger: target, start: startCondition, once: false, invalidateOnRefresh: true,
              onEnter: () => gsap.to(target, { ...animVars, delay: index * staggerAmount, overwrite: "auto" }),
              onLeaveBack: () => gsap.to(target, { ...initialVars, duration: (animVars.duration as number || 0.5) * 0.7, ease: "power1.in", overwrite: "auto" }),
            });
          });
        };
        
        gsap.utils.toArray<HTMLElement>('.gsap-section-title-wrapper').forEach(wrapper => {
          const title = wrapper.querySelector<HTMLElement>('.gsap-section-title');
          const underlineContainer = wrapper.querySelector<HTMLElement>('.title-underline');
          const underlineInner = underlineContainer?.querySelector<HTMLElement>('.underline-inner');

          if (title) {
            gsap.set(title, { opacity: 0, y: 30 });
            ScrollTrigger.create({
              trigger: wrapper, start: "top bottom-=30%", once: false, invalidateOnRefresh: true,
              onEnter: () => gsap.to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite:"auto" }),
              onLeaveBack: () => gsap.to(title, { opacity: 0, y: 30, duration: 0.4, ease: "power1.in", overwrite:"auto" }),
            });
          }
          if (underlineInner && underlineContainer) {
            gsap.set(underlineInner, { scaleX: 0, transformOrigin: "left center" });
            ScrollTrigger.create({
              trigger: wrapper, start: "top bottom-=30%", once: false, invalidateOnRefresh: true,
              onEnter: () => gsap.to(underlineInner, { scaleX: 1, duration: 0.7, ease: "power2.out", delay: 0.1, overwrite:"auto" }),
              onLeaveBack: () => gsap.to(underlineInner, { scaleX: 0, duration: 0.5, ease: "power1.in", overwrite:"auto" }),
            });
          }
        });
        
        createEnterStayAnimation('.gsap-about-text', { opacity: 0, y: 25 }, { opacity:1, y:0, duration: 0.8, ease:"power2.out" }, 0.08, "top bottom-=30%");
        
        gsap.utils.toArray<HTMLElement>('.gsap-experience-card').forEach((card, index) => {
          const isLeft = index % 2 === 0;
          const initialX = isLeft ? -80 : 80;
          gsap.set(card, { opacity: 0, x: initialX });
          ScrollTrigger.create({
            trigger: card, start: "top bottom-=30%", once: false, invalidateOnRefresh: true,
            onEnter: () => gsap.to(card, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out", delay: index * 0.1, overwrite: "auto" }),
            onLeaveBack: () => gsap.to(card, { opacity: 0, x: initialX, duration: 0.5, ease: "power1.in", overwrite: "auto" }),
          });
        });

        const flipCards = gsap.utils.toArray<HTMLElement>('.gsap-flip-card');
        flipCards.forEach((card, index) => {
          gsap.set(card, {
            transformPerspective: 1200, 
            rotationX: -80,            
            y: 40,                     
            opacity: 0,
            transformOrigin: "center 60%" 
          });

          ScrollTrigger.create({
            trigger: card,
            start: "top 85%", 
            once: false, 
            invalidateOnRefresh: true,
            onEnter: () => gsap.to(card, {
              rotationX: 0,
              y: 0,
              opacity: 1,
              duration: 0.9, 
              ease: "power3.out",
              delay: (index % 3) * 0.12, 
              overwrite: "auto"
            }),
            onLeaveBack: () => gsap.to(card, { 
              rotationX: -80,
              y: 40,
              opacity: 0,
              duration: 0.5, 
              ease: "power2.in",
              overwrite: "auto"
            })
          });
        });
        
        const contactCols = gsap.utils.toArray<HTMLElement>('.gsap-contact-col');
        contactCols.forEach((col, index) => {
          const isLeft = col.classList.contains('gsap-contact-col-left');
          const initialX = isLeft ? -50 : 50;
          gsap.set(col, { opacity: 0, x: initialX });
          ScrollTrigger.create({
            trigger: col, start: "top bottom-=30%", once: false, invalidateOnRefresh: true,
            onEnter: () => gsap.to(col, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out", delay: index * 0.1, overwrite: "auto" }),
            onLeaveBack: () => gsap.to(col, { opacity: 0, x: initialX, duration: 0.5, ease: "power1.in", overwrite: "auto" }),
          });
        });

        gsap.delayedCall(0.2, () => ScrollTrigger.refresh(true));

      }, mainRef);

      return () => {
        ctx.revert();
        ScrollTrigger.killAll();
      };
    };

    const timer = setTimeout(initGsap, 100);
    return () => clearTimeout(timer);

  }, []);

  return (
    <div ref={mainRef}>
      {/* Hero Section */}
      <div id="home" className="bg-white">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 animate-gradient bg-size-200 p-4 min-h-screen relative overflow-hidden">
          <div className="flex flex-col items-center gap-6 z-10 pt-24 md:pt-28">
            <AnimatedPopup animationType="popup" triggerOnce={true}>
              <Image src="/profile.jpg" alt="Profile Image" width={200} height={200} className="rounded-full shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300" priority />
            </AnimatedPopup>
            <div className="text-center text-white">
              <AnimatedPopup animationType="tracking" delay="0.2s" triggerOnce={true}>
                <div className="mb-4">
                  <h1 className="text-3xl sm:text-4xl font-bold">Hello,</h1>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">I'm HAREEM FAROOQI</h1>
                  <h2 className="text-xl sm:text-2xl font-semibold text-blue-300 mt-1">Web Developer & Designer</h2>
                </div>
              </AnimatedPopup>
              <AnimatedPopup animationType="focus" delay="0.5s" triggerOnce={true}>
                <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto font-medium">
                  A passionate web developer and designer with expertise in creating
                  beautiful, functional, and user-friendly websites. Specializing in
                  modern web technologies and creative design solutions.
                </p>
              </AnimatedPopup>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <AnimatedPopup animationType="popup" delay="0.7s" triggerOnce={true}><a href="#contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg font-semibold hover-pulse">Contact Me</a></AnimatedPopup>
              <AnimatedPopup animationType="popup" delay="0.8s" triggerOnce={true}><a href="#about" className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg font-semibold hover-pulse">Learn More</a></AnimatedPopup>
            </div>
            <div className="flex gap-6 mt-6">
              {[{ href: "https://github.com/Hareem2134", icon: faGithub, delay: "0.9s" }, { href: "https://linkedin.com", icon: faLinkedin, delay: "1s" }, { href: "https://instagram.com", icon: faInstagram, delay: "1.1s" }].map(({ href, icon, delay }) => (
                <AnimatedPopup animationType="popup" delay={delay} key={href} triggerOnce={true}><Link href={href} target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-300 transform hover:scale-125 transition-transform duration-300"><FontAwesomeIcon icon={icon} /></Link></AnimatedPopup>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gsap-section-title-wrapper mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-gray-900">About Me</h2>
          </div>
          <div className="gsap-section-title-wrapper mb-8 w-24 mx-auto">
             <div className="title-underline"><div className="underline-inner h-full bg-blue-600"></div></div>
          </div>
          <div className="text-lg text-gray-700 space-y-6 leading-relaxed font-medium">
            <p className="gsap-about-text">
              Alhamdulillah I am a dedicated professional with experience in social media management, graphic design, video editing, and web development. I have collaborated with global clients like Dr. Quran (UK), HSH Clothing (Canada), Sheraz Properties (Dubai), and Ansaarullah (Pakistan) to create visually compelling content and manage impactful digital strategies.
            </p>
            <p className="gsap-about-text">
              Alhamdulillah With a solid foundation in programming languages like C, C#, C++, Java, JavaScript, TypeScript, HTML, and CSS. Currently, I am expanding my knowledge in generative AI and Cloud Computing to further enhance my skill set In Shaa Allah.
            </p>
            <p className="gsap-about-text">
              Passionate about continuous learning, I aim to contribute my diverse expertise in web development, design, and social media management to deliver creative and effective solutions In Shaa Allah.
            </p>
          </div>
          <div className="gsap-about-text mt-10">
            <a href="#contact" className="inline-block py-3 px-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-lg font-semibold">Let's Connect</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="gsap-section-title-wrapper mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-gray-900">Skills</h2>
          </div>
          <div className="gsap-section-title-wrapper mb-12 w-24 mx-auto">
             <div className="title-underline"><div className="underline-inner h-full bg-blue-600"></div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.title} 
                className="gsap-flip-card h-full group
                           bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-700 
                           text-white p-6 rounded-xl 
                           shadow-lg shadow-black/10 {/* Adjusted shadow for consistency */}
                           flex flex-col 
                           transition-all duration-300 ease-out 
                           hover:shadow-xl hover:shadow-black/20 hover:scale-[1.03]"
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skillGroup.items.map((item) => ( <span key={item} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors duration-200 cursor-default">{item}</span> ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 bg-gray-200">
        <div className="max-w-5xl mx-auto text-center">
            <div className="gsap-section-title-wrapper mb-2">
              <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-gray-900">Education</h2>
            </div>
            <div className="gsap-section-title-wrapper mb-12 w-24 mx-auto">
               <div className="title-underline"><div className="underline-inner h-full bg-blue-600"></div></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree + edu.institution} 
                  className="gsap-flip-card h-full group
                             bg-gradient-to-r from-blue-700 to-purple-700 
                             p-6 rounded-lg 
                             shadow-lg shadow-black/10 {/* Adjusted shadow for consistency */}
                             flex flex-col justify-between 
                             transition-all duration-300 ease-out 
                             hover:shadow-xl hover:shadow-black/20 hover:scale-[1.03]"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-200">{edu.institution}</p>
                  </div>
                  <p className="text-blue-300 italic mt-3">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="gsap-section-title-wrapper text-center mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-gray-900">Experience</h2>
          </div>
          <div className="gsap-section-title-wrapper text-center mb-12 w-44 mx-auto">
             <div className="title-underline"><div className="underline-inner h-full bg-blue-600"></div></div>
          </div>
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="gsap-experience-card">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-blue-600 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.company}</h3><p className="text-blue-600 font-semibold text-lg mt-1">{exp.role}</p><p className="text-gray-700 mt-3 text-base leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-100 w-full py-16 md:py-24">
        <div className="container mx-auto">
          <div className="gsap-section-title-wrapper text-center mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-gray-900">Portfolio</h2>
          </div>
          <div className="gsap-section-title-wrapper text-center mb-12 w-24 mx-auto">
             <div className="title-underline"><div className="underline-inner h-full bg-blue-600"></div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PortfolioCard.map((card, index) => ( 
              <div 
                key={card.title} 
                className="gsap-flip-card h-full group 
                           bg-gradient-to-br from-gray-800 via-purple-700 to-indigo-800 
                           rounded-lg 
                           shadow-xl shadow-black/30
                           flex flex-col 
                           transition-all duration-300 ease-out 
                           hover:shadow-2xl hover:shadow-black/40 hover:scale-[1.03]"
              >
                <Link href={card.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden"> {/* Image link retains overflow-hidden */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={600} 
                    height={400}
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-[200px] object-cover portfolio-image-hover-effect" 
                  />
                </Link>
                <div className="p-6 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-400 uppercase tracking-wider">{card.title}</h3>
                    <p className="text-gray-300 mt-2 text-sm">{card.description}</p>
                  </div>
                  <Link href={card.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">View Project →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="gsap-section-title-wrapper text-center mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-gray-900">Contact Me</h2>
          </div>
          <div className="gsap-section-title-wrapper text-center mb-12 w-24 mx-auto">
            <div className="title-underline"><div className="underline-inner h-full bg-blue-600"></div></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="gsap-contact-col gsap-contact-col-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Get In Touch</h3>
                <p className="text-gray-700 my-4 text-lg leading-relaxed font-medium">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </p>
                 <div className="space-y-6 mt-6">
                  <div className="flex items-center space-x-4 group"><div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl group-hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-110"><FontAwesomeIcon icon={faEnvelope} /></div><div><h4 className="font-bold text-gray-900">Email</h4><a href="mailto:hareemfarooqi2134@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">hareemfarooqi2134@gmail.com</a></div></div>
                  <div className="flex items-center space-x-4 group"><div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl group-hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-110"><FontAwesomeIcon icon={faPhone} /></div><div><h4 className="font-bold text-gray-900">Phone</h4><a href="tel:+923242762668" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">+92 324 2762668</a></div></div>
                </div>
                <div className="flex space-x-5 mt-8">
                  <Link href="https://github.com/Hareem2134" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl hover:bg-black transform hover:scale-110 transition-all duration-300" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl hover:bg-blue-800 transform hover:scale-110 transition-all duration-300" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></Link>
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center text-xl hover:opacity-80 transform hover:scale-110 transition-all duration-300" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
              </div>
            </div>
            <div className="gsap-contact-col gsap-contact-col-right">
              <div className="bg-gray-50 rounded-lg shadow-xl p-6 sm:p-8">
                <form className="space-y-6">
                  <div><label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label><input id="name" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200" placeholder="Your Name" /></div>
                  <div><label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label><input id="email" type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200" placeholder="Your Email" /></div>
                  <div><label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label><textarea id="message" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200" rows={5} placeholder="Your Message"></textarea></div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}