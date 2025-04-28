import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          headingRef.current.classList.remove('opacity-0', 'translate-y-5');
          setTimeout(() => {
            contentRef.current.classList.remove('opacity-0');
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-all duration-700 transform opacity-0 translate-y-5"
        >
          About <span className="text-indigo-600">Me</span>
        </h2>
        
        <div 
          ref={contentRef} 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-opacity duration-1000 opacity-0"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 h-60 rounded-lg flex items-center justify-center mb-4">
                {/* Replace with your image */}
                          
                
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white">Kumkum S Heralgi</h3>
                <p className="text-indigo-600 dark:text-indigo-400">FullStack Developer</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate Frontend Developer with a strong foundation in React, Javascript, and modern CSS frameworks like Tailwind. I love creating beautiful, user-friendly interfaces that provide a seamless experience across all devices.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I specialize in building responsive, accessible, and performant web applications with clean and maintainable code. I'm always exploring new technologies and methodologies to enhance my skillset and deliver better solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    B.E. Computer Science<br />
                    Global Academy of Technology, 2022 - 2026
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="/resume.pdf" 
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Download Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
