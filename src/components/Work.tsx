import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Salesforce CRM Automation",
    category: "Salesforce Admin Project",
    tools: "Flow Builder, Process Builder, Dashboards",
    description: "Developed tailored Salesforce applications utilizing objects, fields, and record types. Administered user access and automated business operations.",
    image: "/images/placeholder.webp"
  },
  {
    name: "Agentforce AI Project",
    category: "Agentforce Specialist Project",
    tools: "Agentforce, Data Cloud, Prompt Engineering",
    description: "Built AI-powered workflows with Agentforce to automate case resolution. Applied prompt engineering and integrated with Data Cloud for real-time insights.",
    image: "/images/placeholder.webp"
  },
  {
    name: "E-Shopping Web Application",
    category: "Java/Spring Boot + MySQL",
    tools: "Java, Spring Boot, MySQL, RESTful API",
    description: "Created a shopping platform powered by a RESTful API. Implemented CRUD functions, user authentication, and order management with MySQL.",
    image: "/images/mysql.webp"
  },
  {
    name: "Banking Account UI",
    category: "Jetpack Compose / Android",
    tools: "Kotlin, Jetpack Compose",
    description: "Developed a key UI component for managing bank account details in a mobile app. Implemented Lazy Column for efficient data loading.",
    image: "/images/placeholder.webp"
  },
  {
    name: "Product List Search",
    category: "Front-End Search Interface",
    tools: "JavaScript, HTML, JSON",
    description: "Built a dynamic product search interface enabling real-time filtering of product data. Structured product information in JSON.",
    image: "/images/javascript.webp"
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Description</h4>
                <p>{project.description}</p>
                <h4 style={{ marginTop: '15px' }}>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
