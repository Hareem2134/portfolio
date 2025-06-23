// src/app/page.tsx
"use client";
import { useEffect, useRef, useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faChevronDown, faChevronUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip"; 

import "../../src/app/globals.css";
import AnimatedPopup from "../../components/AnimatedPopup"; // Assuming this path is correct

gsap.registerPlugin(ScrollTrigger, Flip); 

// --- Data Arrays ---
const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C#", "C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Python"]
  },
  {
    title: "Web Development",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "GSAP", "WordPress", "Shopify"]
  },
  {
    title: "Social Media Management",
    items: ["Strategy", "Content Creation", "Analytics", "Campaign Management", "Community Engagement"]
  },
  {
    title: "Design Tools",
    items: ["Photoshop", "Illustrator", "Premiere Pro", "Figma", "Canva"]
  },
  {
    title: "Game Development",
    items: ["Unity3D", "C# (Unity)", "Blender (Basic)", "Game Design Principles"]
  },
  {
    title: "Digital Marketing",
    items: ["SEO", "SEM", "Content Marketing", "Email Marketing", "Google Analytics"]
  }
]; 

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "UBIT KARACHI UNIVERSITY",
    year: "2014 - 2017",
    description: "Specialized in core CS concepts, algorithms, and software development. Developed strong foundation in programming languages including C, C++, Java, and web technologies."
  },
  {
    degree: "Web Development",
    institution: "MEMON FOUNDATION",
    year: "2014",
    description: "Completed intensive web development training covering HTML, CSS, JavaScript and responsive design principles. Built multiple projects demonstrating front-end skills."
  },
  {
    degree: "Graphic Designing",
    institution: "MEMON FOUNDATION",
    year: "2014",
    description: "Learned industry-standard design tools and principles. Created branding packages, marketing materials, and digital artwork using Adobe Creative Suite."
  },
  {
    degree: "Video Editing",
    institution: "MEMON FOUNDATION",
    year: "2014",
    description: "Mastered video editing techniques, storytelling, and post-production workflows using professional software like Adobe Premiere Pro."
  },
  {
    degree: "Android App Development",
    institution: "SIR SYED UNIVERSITY",
    year: "2016",
    description: "Developed functional Android apps using Java. Learned mobile UI/UX principles, REST API integration, and Google Play Store deployment."
  },
  {
    degree: "Game Development",
    institution: "Software House",
    year: "2016",
    description: "Gained hands-on experience in game design, development, and testing using popular game engines like Unity and Unreal Engine."
  },
  {
    degree: "Linux Fundamentals",
    institution: "NED UNIVERSITY",
    year: "2016",
    description: "Gained proficiency in Linux administration, command line operations, shell scripting, and system security fundamentals."
  },
  {
    degree: "Generative AI & Cloud Computing",
    institution: "Governor House",
    year: "Currently - 2026 In Shaa Allah",
    description: "Exploring advanced topics in Artificial Intelligence, machine learning models, cloud infrastructure, and ethical AI development to build innovative solutions."
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
  const [openSkillCategory, setOpenSkillCategory] = useState<string | null>(null); 
  
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  useEffect(() => {
    if (!isClient) {
      return;
    }

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
              trigger: wrapper, start: "top bottom-=20%", once: false, invalidateOnRefresh: true,
              onEnter: () => gsap.to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite:"auto" }),
              onLeaveBack: () => gsap.to(title, { opacity: 0, y: 30, duration: 0.4, ease: "power1.in", overwrite:"auto" }),
            });
          }
          if (underlineInner && underlineContainer) {
            gsap.set(underlineInner, { scaleX: 0, transformOrigin: "left center" });
            ScrollTrigger.create({
              trigger: wrapper, start: "top bottom-=20%", once: false, invalidateOnRefresh: true,
              onEnter: () => gsap.to(underlineInner, { scaleX: 1, duration: 0.7, ease: "power2.out", delay: 0.1, overwrite:"auto" }),
              onLeaveBack: () => gsap.to(underlineInner, { scaleX: 0, duration: 0.5, ease: "power1.in", overwrite:"auto" }),
            });
          }
        });
        
        createEnterStayAnimation('.gsap-about-text', { opacity: 0, y: 25 }, { opacity:1, y:0, duration: 0.8, ease:"power2.out" }, 0.08, "top bottom-=30%");
        
        gsap.utils.toArray<HTMLElement>('.gsap-experience-entry').forEach((entry, index) => {
          const card = entry.querySelector('.experience-card-content');
          const accent = entry.querySelector('.experience-accent');
          const isLeft = index % 2 === 0; 

          gsap.set(card, { opacity: 0, x: isLeft ? -70 : 70, rotation: isLeft ? -2.5 : 2.5, scale:0.98 });
          gsap.set(accent, { scaleY: 0, transformOrigin: 'top center' });

          ScrollTrigger.create({
            trigger: entry,
            start: "top 80%",
            once: false,
            invalidateOnRefresh: true,
            onEnter: () => {
              gsap.to(card, {
                opacity: 1, x: 0, rotation: 0, scale: 1,
                duration: 0.7, ease: "power3.out", delay: 0.1 
              });
              gsap.to(accent, {
                scaleY: 1, duration: 0.6, ease: "power2.out", delay: 0.2
              });
            },
            onLeaveBack: () => {
              gsap.to(card, { opacity: 0, x: isLeft ? -70 : 70, rotation: isLeft ? -2.5 : 2.5, scale:0.98, duration: 0.4, ease: "power2.in" });
              gsap.to(accent, { scaleY: 0, duration: 0.3, ease: "power1.in" });
            },
          });
        });

        const portfolioFlipCards = gsap.utils.toArray<HTMLElement>('#portfolio .gsap-flip-card');
        portfolioFlipCards.forEach((card, index) => { 
          gsap.set(card, {
            transformPerspective: 1200, 
            rotationX: -80,            
            y: 40,                     
            opacity: 0,
            transformOrigin: "center 10%" 
          });

          ScrollTrigger.create({
            trigger: card,
            start: "top 95%", 
            once: false, 
            invalidateOnRefresh: true,
            onEnter: () => gsap.to(card, {
              rotationX: 0,
              y: 0,
              opacity: 1,
              duration: 0.2,
              ease: "power3.out",
              delay: (index % 3) * 0.08, 
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

        const skillCategoryCards = gsap.utils.toArray<HTMLElement>('.gsap-skill-category-card');
        skillCategoryCards.forEach((card, index) => {
          gsap.set(card, { opacity: 0, y: 50, scale: 0.9 });
          ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            once: false,
            invalidateOnRefresh: true,
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
                delay: (index % (gsap.utils.toArray<HTMLElement>('.md\\:grid-cols-2').length > 0 ? 2 : 3)) * 0.1, 
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 0.4,
                ease: 'power1.in',
              });
            },
          });
        });
        
        const timelineEntries = gsap.utils.toArray<HTMLElement>('.gsap-timeline-entry');
        timelineEntries.forEach((entry, index) => {
          const contentLeft = entry.querySelector('.timeline-content-left');
          const contentRight = entry.querySelector('.timeline-content-right');
          const dot = entry.querySelector('.timeline-dot-actual'); 

          gsap.set([contentLeft, contentRight, dot], { opacity: 0 });
          if(contentLeft) gsap.set(contentLeft, { x: -50 });
          if(contentRight) gsap.set(contentRight, { x: 50 });
          gsap.set(dot, { scale: 0 });

          ScrollTrigger.create({
            trigger: entry,
            start: "top 85%",
            once: false,
            invalidateOnRefresh: true,
            onEnter: () => {
              gsap.to(dot, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: index * 0.1 });
              if(contentLeft) gsap.to(contentLeft, { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: index * 0.1 + 0.1 });
              if(contentRight) gsap.to(contentRight, { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: index * 0.1 + 0.1 });
            },
            onLeaveBack: () => {
              if(contentLeft) gsap.to(contentLeft, { x: -50, opacity: 0, duration: 0.4, ease: "power2.in" });
              if(contentRight) gsap.to(contentRight, { x: 50, opacity: 0, duration: 0.4, ease: "power2.in" });
              gsap.to(dot, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
            }
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

    const timer = setTimeout(initGsap, 50);
    return () => clearTimeout(timer);

  }, [isClient]);

  const handleSkillToggle = (categoryTitle: string) => {
    const categoryCard = document.querySelector(`.gsap-skill-category-card[data-category="${categoryTitle}"]`);
    const skillListContent = categoryCard?.querySelector<HTMLElement>('.skill-list-content');
  
    if (!skillListContent) return;
  
    const isOpening = openSkillCategory !== categoryTitle;
    const currentlyOpenCardElement = openSkillCategory ? document.querySelector(`.gsap-skill-category-card[data-category="${openSkillCategory}"] .skill-list-content`) : null;

    if (currentlyOpenCardElement && isOpening) {
        const oldState = Flip.getState(currentlyOpenCardElement as HTMLElement, {props: "maxHeight"});
        (currentlyOpenCardElement as HTMLElement).style.maxHeight = "0px"; 
        Flip.from(oldState, {
            targets: currentlyOpenCardElement,
            duration: 0.3, 
            ease: "power2.inOut",
            scale: false,
            absolute: true, 
            onComplete: () => { if (isClient) ScrollTrigger.refresh(); } 
        });
        gsap.to((currentlyOpenCardElement as HTMLElement).querySelectorAll('.gsap-skill-item-in-accordion'), 
          { opacity: 0, y: 10, duration: 0.2, ease: "power1.in" }
        );
    }
  
    const flipState = Flip.getState(skillListContent, {props: "maxHeight"}); 
  
    setOpenSkillCategory(isOpening ? categoryTitle : null);
  
    gsap.delayedCall(0.01, () => { 
      if (isOpening) {
        skillListContent.style.maxHeight = "none"; 
      }
  
      Flip.from(flipState, {
        targets: skillListContent,
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => {
          if (isOpening) {
            skillListContent.style.maxHeight = skillListContent.scrollHeight + "px"; 
          } else {
            skillListContent.style.maxHeight = "0px"; 
          }
          if (isClient) ScrollTrigger.refresh(); 
        }
      });
  
      const items = skillListContent.querySelectorAll('.gsap-skill-item-in-accordion');
      if (isOpening) {
        gsap.fromTo(items, 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: "power2.out" }
        );
      } 
    });
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const res = await fetch("/api/send-email", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        console.error("Error from API:", result);
        setFormStatus(`Error: ${result.error || result.details || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("Error: Could not submit the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Placeholder for the year to avoid empty space if you prefer
  const currentYearPlaceholder = new Date().getFullYear().toString();


  return (
    <div ref={mainRef}>
      {/* Hero Section */}
      <div id="home">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 animate-gradient bg-size-200 p-4 min-h-screen relative overflow-hidden">
          <div className="flex flex-col items-center gap-6 z-10 pt-24 md:pt-28">
            {isClient && (
              <AnimatedPopup animationType="popup" triggerOnce={true}>
                <Image src="/profile.jpg" alt="Profile Image" width={200} height={200} className="rounded-full shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300" priority />
              </AnimatedPopup>
            )}
            <div className="text-center text-white">
              {isClient && (
                <AnimatedPopup animationType="tracking" delay="0.2s" triggerOnce={true}>
                  <div className="mb-4">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">Hi, I'm HAREEM FAROOQI</h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-300 mt-1">Web Developer & Designer</h2>
                  </div>
                </AnimatedPopup>
              )}
              {isClient && (
                <AnimatedPopup animationType="focus" delay="0.5s" triggerOnce={true}>
                  <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto font-medium">
                    A passionate web developer and designer with expertise in creating
                    beautiful, functional, and user-friendly websites. Specializing in
                    modern web technologies and creative design solutions.
                  </p>
                </AnimatedPopup>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {isClient && <AnimatedPopup animationType="popup" delay="0.7s" triggerOnce={true}><a href="#contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg font-semibold hover-pulse">Contact Me</a></AnimatedPopup>}
              {isClient && <AnimatedPopup animationType="popup" delay="0.8s" triggerOnce={true}><a href="#about" className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg font-semibold hover-pulse">Learn More</a></AnimatedPopup>}
            </div>
            <div className="flex gap-6 mt-8"> 
              {[
                { href: "https://github.com/Hareem2134", icon: faGithub, delay: "0.9s" },
                { href: "https://www.linkedin.com/in/hareemfarooqi", icon: faLinkedin, delay: "1.0s" },
                { href: "https://www.instagram.com/hareem.farooqi", icon: faInstagram, delay: "1.1s" },
                { href: "https://x.com/hareem_2134", icon: faXTwitter, delay: "1.2s" }
              ].map(({ href, icon, delay }) => (
                isClient && (
                  <AnimatedPopup animationType="popup" delay={delay} key={href} triggerOnce={true}>
                    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-300 transform hover:scale-125 transition-transform duration-300">
                      <FontAwesomeIcon icon={icon} />
                    </Link>
                  </AnimatedPopup>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section 
        id="about" 
        className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950 animate-gradient bg-size-200 text-gray-200"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="gsap-section-title-wrapper mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-white">About Me</h2>
          </div>
          <div className="gsap-section-title-wrapper mb-8 w-24 mx-auto">
             <div className="title-underline"><div className="underline-inner h-full bg-indigo-500"></div></div>
          </div>
          <div className="text-lg space-y-6 leading-relaxed font-medium">
            <p className="gsap-about-text text-gray-200">
              Alhamdulillah I am a dedicated professional with experience in social media management, graphic design, video editing, and web development. I have collaborated with global clients like Dr. Quran (UK), HSH Clothing (Canada), Sheraz Properties (Dubai), and Ansaarullah (Pakistan) to create visually compelling content and manage impactful digital strategies.
            </p>
            <p className="gsap-about-text text-gray-200">
              Alhamdulillah With a solid foundation in programming languages like C, C#, C++, Java, JavaScript, TypeScript, HTML, and CSS. Currently, I am expanding my knowledge in generative AI and Cloud Computing to further enhance my skill set In Shaa Allah.
            </p>
            <p className="gsap-about-text text-gray-200">
              Passionate about continuous learning, I aim to contribute my diverse expertise in web development, design, and social media management to deliver creative and effective solutions In Shaa Allah.
            </p>
          </div>
          <div className="gsap-about-text mt-10">
            <a href="#contact" className="inline-block py-3 px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg font-semibold">Let's Connect</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="gsap-section-title-wrapper text-center mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-white">Skills</h2>
          </div>
          <div className="gsap-section-title-wrapper text-center mb-12 md:mb-16 w-24 mx-auto">
            <div className="title-underline"><div className="underline-inner h-full bg-indigo-500"></div></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {skills.map((skillCategory) => (
              <div
                key={skillCategory.title}
                className="gsap-skill-category-card bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 ease-out hover:shadow-indigo-500/40 border border-slate-700/60 hover:border-indigo-500/70"
                data-category={skillCategory.title} 
              >
                <button
                  onClick={() => handleSkillToggle(skillCategory.title)}
                  className="w-full p-6 text-left flex justify-between items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-75 rounded-t-xl"
                >
                  <h3 className="text-xl lg:text-2xl font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">{skillCategory.title}</h3>
                  <FontAwesomeIcon
                    icon={openSkillCategory === skillCategory.title ? faChevronUp : faChevronDown}
                    className={`text-indigo-400 transition-transform duration-300 text-lg ${
                      openSkillCategory === skillCategory.title ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                    className="skill-list-content"
                    style={{ 
                        maxHeight: openSkillCategory === skillCategory.title ? '1000px' : '0px', 
                        overflow: 'hidden',
                        transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
                    }}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-slate-700/60">
                    <ul className="space-y-3 mt-4">
                      {skillCategory.items.map((item) => (
                        <li key={item} className="gsap-skill-item-in-accordion text-gray-300 flex items-center text-sm md:text-base hover:text-indigo-300 transition-colors">
                           <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0 shadow-sm shadow-indigo-400/50"></span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 bg-gradient-to-b from-purple-950 via-indigo-950 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="gsap-section-title-wrapper text-center mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-white">Education</h2>
          </div>
          <div className="gsap-section-title-wrapper text-center mb-12 md:mb-16 w-24 mx-auto">
             <div className="title-underline"><div className="underline-inner h-full bg-purple-500"></div></div>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-2 bottom-2 left-1/2 w-1 bg-indigo-700/60 transform -translate-x-1/2 rounded-full"></div>
            {education.map((edu, index) => (
              <div key={index} className="gsap-timeline-entry mb-10 md:mb-16 group">
                <div className="hidden md:flex items-start relative transition-all duration-300 ease-out group-hover:scale-[1.03]"> 
                  <div className="timeline-content-left w-[calc(50%-2.75rem)] text-right">
                    <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">{edu.degree}</h3>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.year}</p>
                  </div>
                  <div className="absolute left-1/2 top-1 transform -translate-x-1/2 z-10">
                    <div className={`timeline-dot-actual w-5 h-5 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${index % 2 === 0 ? 'border-indigo-400 bg-indigo-500 group-hover:bg-indigo-400' : 'border-purple-400 bg-purple-500 group-hover:bg-purple-400'}`}></div>
                  </div>
                  <div className="timeline-content-right w-[calc(50%-2.75rem)] text-left ml-[5.5rem]">
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
                <div className="md:hidden flex items-start relative py-4 group transition-all duration-300 ease-out group-hover:scale-[1.03]"> 
                  <div className="absolute top-0 left-3 w-1 h-full bg-indigo-700/60 group-hover:bg-indigo-500/70 transition-colors duration-300">
                     {index === education.length - 1 && <div className="absolute top-1/2 bottom-0 left-0 w-full bg-gradient-to-b from-purple-950 via-indigo-950 to-blue-950" style={{top: '1.125rem'}}></div>}
                  </div>
                  <div className={`timeline-dot-actual absolute top-3 left-3 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${index % 2 === 0 ? 'border-indigo-400 bg-indigo-500 group-hover:bg-indigo-400' : 'border-purple-400 bg-purple-500 group-hover:bg-purple-400'}`}></div>
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">{edu.degree}</h3>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs mb-2">{edu.year}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-blue-950 via-indigo-950 to-purple-950 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="gsap-section-title-wrapper text-center mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-white">Experience</h2>
          </div>
          <div className="gsap-section-title-wrapper text-center mb-12 md:mb-16 w-44 mx-auto">
             <div className="title-underline"><div className="underline-inner h-full bg-blue-500"></div></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="gsap-experience-entry group relative flex items-start">
                <div className={`experience-accent w-1.5 h-full absolute left-0 top-0 rounded-full bg-gradient-to-b ${index % 2 === 0 ? 'from-blue-500 to-indigo-600' : 'from-indigo-600 to-purple-600' } transform scale-y-0 origin-top group-hover:shadow-lg group-hover:shadow-blue-500/50`}></div>
                <div className={`experience-card-content ml-6 md:ml-8 p-6 sm:p-8 rounded-lg 
                                bg-slate-800/70 backdrop-blur-md border border-slate-700/50
                                shadow-xl transition-all duration-300 ease-out
                                group-hover:shadow-2xl group-hover:shadow-indigo-600/30 group-hover:scale-[1.03] group-hover:-translate-y-1.5 group-hover:border-slate-600/70`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{exp.company}</h3>
                  <p className="text-indigo-400 font-semibold text-lg mt-1 group-hover:text-indigo-300 transition-colors duration-300">{exp.role}</p>
                  <p className="text-gray-300 mt-4 text-base leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-900 w-full py-16 md:py-24"> 
        <div className="container mx-auto px-4">
          <div className="gsap-section-title-wrapper text-center mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-white">Portfolio</h2>
          </div>
          <div className="gsap-section-title-wrapper text-center mb-12 md:mb-16 w-24 mx-auto">
             <div className="title-underline"><div className="underline-inner h-full bg-purple-500"></div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PortfolioCard.map((card) => ( 
              <div 
                key={card.title} 
                className="gsap-flip-card h-full group 
                           bg-gradient-to-br from-slate-800/70 via-indigo-900/60 to-purple-900/70 backdrop-blur-sm
                           border border-slate-700/60 hover:border-purple-600/80
                           rounded-lg 
                           shadow-xl shadow-black/40 
                           flex flex-col 
                           transition-all duration-300 ease-out 
                           hover:shadow-2xl hover:shadow-purple-600/50 hover:scale-[1.04]"
              >
                <div className="relative overflow-hidden rounded-t-lg"> 
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={600} 
                    height={400}
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-[220px] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={card.link} target="_blank" rel="noopener noreferrer" 
                          className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-semibold
                                     transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100
                                     hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75">
                      View Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-xs" />
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300 uppercase tracking-wider">{card.title}</h3>
                    <p className="text-gray-400 mt-2 text-sm">{card.description}</p>
                  </div>
                  <Link href={card.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 font-medium self-center opacity-70 group-hover:opacity-100">
                    More Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-900 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="gsap-section-title-wrapper text-center mb-2">
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold uppercase text-white">Contact Me</h2>
          </div>
          <div className="gsap-section-title-wrapper text-center mb-12 w-24 mx-auto">
            <div className="title-underline"><div className="underline-inner h-full bg-gradient-to-r from-blue-600 to-purple-600"></div></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="gsap-contact-col gsap-contact-col-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Get In Touch</h3>
                <p className="text-gray-300 my-4 text-lg leading-relaxed font-medium">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </p>
                 <div className="space-y-6 mt-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-xl group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 transform group-hover:scale-110">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-100">Email</h4>
                        <a href="mailto:hareemfarooqi2134@gmail.com" className="text-indigo-400 hover:text-purple-300 hover:underline transition-colors duration-200">hareemfarooqi2134@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-xl group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 transform group-hover:scale-110">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-100">Phone</h4>
                        <a href="tel:+923242762668" className="text-indigo-400 hover:text-purple-300 hover:underline transition-colors duration-200">+92 324 2762668</a>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 md:space-x-5 mt-8">
                  <Link href="https://github.com/Hareem2134" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl hover:bg-black transform hover:scale-110 transition-all duration-300 shadow-md" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></Link>
                  <Link href="https://www.linkedin.com/in/hareemfarooqi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl hover:bg-blue-800 transform hover:scale-110 transition-all duration-300 shadow-md" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></Link>
                  <Link href="https://www.instagram.com/hareem.farooqi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center text-xl hover:opacity-80 transform hover:scale-110 transition-all duration-300 shadow-md" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
                  <Link href="https://x.com/hareem_2134" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center text-xl hover:bg-gray-700 transform hover:scale-110 transition-all duration-300 shadow-md" aria-label="X (Twitter)"><FontAwesomeIcon icon={faXTwitter} /></Link>
                </div>
              </div>
            </div>
            <div className="gsap-contact-col gsap-contact-col-right">
              <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700/60 rounded-lg shadow-xl p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 font-medium mb-1">Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 text-gray-100 placeholder-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-200 font-medium mb-1">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 text-gray-100 placeholder-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200"
                      placeholder="Your Email" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-200 font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 text-gray-100 placeholder-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200"
                      rows={5} 
                      placeholder="Your Message" 
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:shadow-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {formStatus && (
                    <p className={`mt-3 text-sm ${formStatus.startsWith("Error:") ? "text-red-400" : "text-green-400"}`}>
                      {formStatus}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  ); 
}