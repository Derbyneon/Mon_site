/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jacob's Portfolio",
  description:
    "From a young age, I have been a passionate individual immersed in the world of computer science, with a specific interest in development, data, and cybersecurity.",
  og: {
    title: "Jacob WILSON Portfolio",
    type: "website",
    url: "http://jarvis.com/",
  },
}; 

//Home Page
const greeting = {
  title: "Jacob WILSON",
  logo_name: "Jacob_WILSON",
  nickname: "Jarvis",
  subTitle:
  "From a young age, I have been a passionate individual immersed in the world of computer science, with a specific interest in development, data, and cybersecurity.",
  resumeLink:
    "https://drive.google.com/file/d/1Nrn_lRuQaNiRqKH1O4EYqPJH37no2jYf/view?usp=sharing",
  portfolio_repository: "https://github.com/Derbyneon",
  githubProfile: "https://github.com/Derbyneon",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Derbyneon",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sewah-akou%C3%A9t%C3%A9-jacob-wilson-629469244/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCtVEL56NT3AYA271uZey2tA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:jacobwilson20xy@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/profile.php?id=100061211079921",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/derby_neon/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data (Science, Analyse, Enginering) & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "mdi:language-r",
          style: {
            backgroundColor: "transparent",
            color: "#FF0000",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web applications using PERN / MERN",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application API in Node, Express & Flask",
        "⚡ building modern softwares with a DevOps approach",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "mdi:angular",
          style: {
            color: "#FF0000",
          },
        },
        {
          skillName: "Vues.js",
          fontAwesomeClassname: "teenyicons:vue-outline",
          style: {
            color: "#00FF00",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "devicon:nextjs",
          style: {
            color: "#00FF00",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "CuberSecurity Analyse",
      fileName: "Cyberimg",
      skills: [
        "⚡ Network and system monitoring",
        "⚡ Security risk assessment",
        "⚡ Security incident management",
        "⚡ Penetration testing",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Azure Platform",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Derbyneon/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/jacobwilson20xy",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/jacobwilson20x",
    },
    {
      siteName: "OpenClassroom Research Jacob Wilson",
      iconifyClassname: "simple-icons:operagx",
      style: {
        color: "#77b5fe",
      },
      profileLink: "https://openclassrooms.com",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0000FF",
      },
      profileLink: "https://www.coursera.org/user/75ba0af990b0bb125bcba9276247837d",
    },
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#00FF00",
      },
      profileLink: "https://tryhackme.com/p/derbyneon",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hautes études des sciences et techniques de l'ingénierie et du management",
      subtitle: "Master. in Computer Engineering & AI",
      logo_path: "hestim-logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://hestim.ma/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Spécialisation IBM Full Stack Software Developer",
      subtitle: "13 Months",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/NTGBWGVQ688M",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Spécialisation Microsoft Cybersecurity Analyst",
      subtitle: "17 Months",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/U7YATGRU7GTE",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Spécialisation IBM Data Engineering",
      subtitle: "15 Months",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/L7HAPP6MHNYE",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: " Spécialisation Google IT Support",
      subtitle: "11 Months",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/YJ6BJKU35JZU",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Spécialisation Oracle SQL Databases",
      subtitle: "04 Months",
      logo_path: "lq_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/STQFS62PPKVC",
      alt_name: "Learb Quest",
      color_code: "#2A73CC",
    },
    {
      title: "Graphic Design",
      subtitle: "2 Months",
      logo_path: "cu_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/AZ8SA9TTA6G3",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Spécialisation Introduction to Data Science",
      subtitle: "8 Months",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/DJJHE8LA45K4",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
      subtitle: "4 Months",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/ce4ca3e8-9d6f-46ed-b6eb-2fed7eb958bb/linked_in_profile",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Spécialisation IBM Data Analytics with Excel and R",
      subtitle: "14 Months",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/Q2TF6DESY4QT",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Work, internships and volunteering, I've worked with a number of fast-growing startups as a developer. And as my curcus isn't over yet, I'm still looking for internships and entry-level jobs to hone my skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Android Developer",
          company: "Ozana",
          company_url: "https://www.facebook.com/profile.php?id=100094764770991",
          logo_path: "ozana_logo.png",
          duration: " Jun 2023 - Sept 2024",
          location: "Lomé Togo",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "No internship for the moment",
          company: "",
          company_url: "",
          logo_path: "none_logo.jpg",
          duration: "MM YYYY - MM YYYY",
          location: "No Location",
          description:
            "I haven't had any internship opportunities yet. But I am available and open to any proposal.",
          color: "#000000",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "President of HIC",
          company: "Club HIC",
          company_url: "https://hestim.ma/",
          logo_path: "hic.jpeg",
          duration: "January 2024 - December 2025",
          location: "Casablanca Maroc",
          description:
            "I had the honor of being the president of Hestim Informatique Club. This is HESTIM's computer club. It has cells like Freelance, which is the freelance part of the club, and CodeMaster, which is the club's competitive cell.",
          color: "#4285F4",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create a PERN Stack web application to manage a gym and deploy it on HEROKU",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I haven't written any articles yet, but I'm planning to write a lot, so stay tuned! ",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*{
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },*/
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
      "https://jacobdev.odoo.com/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
      "https://jacobdev.odoo.com/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
      "https://jacobdev.odoo.com/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
      "https://jacobdev.odoo.com/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profil_jacob.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with web developement, software developpement, AI, Android, Cloud, Opensource Development and cybersecurity analyse.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "My blog is under construction at the moment, but you can still access it. You'll be able to follow its evolution with me.",
    link:       "https://jacobdev.odoo.com/",

    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Maarif, Casablanca Morocco - 22000",
    locality: "Kanodar",
    country: "Morocco",
    region: "Casablanca",
    postalCode: "22000",
    streetAddress: "Maarif",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NHN91LtiJKn7Suio6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
