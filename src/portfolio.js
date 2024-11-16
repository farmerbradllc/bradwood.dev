/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Brad Wood",
  title: "I'm a Developer, Entrepreneur, and Father!",
  subTitle: emoji(
    ""
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/farmerbradllc",
  linkedin: "https://www.linkedin.com/in/farmerbrad/",
  //gmail: "saadpasta70@gmail.com",
  
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Always Learning new skills",
  skills: [
    emoji(
      "⚡ Make User Interface match expectations"
    ),
    emoji(
      "⚡ Innovate to make things better"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Umbraco",
      fontAwesomeClassname: "fab fa-umbraco"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true// Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Butler University",
      logo: require("./assets/images/butler.png"),
      subHeader: "Master of Business Administration",
      duration: "January 2022 - May 2026",
      desc: "Focus on Entrpreneurship and Innovation",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "Taylor University",
      logo: require("./assets/images/taylor.png"),
      subHeader: "Bachelor of Science in Computer Science / New Media / Systems",
      duration: "August 2004 - May 2008",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UX/UI", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Developer",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer",
      company: "3Rivers Federal Credit Union",
      companylogo: require("./assets/images/3rivers.jpg"),
      date: "May 2021 – Present",
      desc: "Develop and maintain website. Collaborated with cross-functional teams to align digital initiatives with organizational objectives. Ensured compliance with industry standards, accessibility guidelines. Provided technical support, troubleshooting, and system optimization to maintain seamless operations.",
      descBullets: [
        "UX Design Developer - 2021 -  Dec. 2023"
      ]
    },
    {
      role: "Lead Web Developer and Web Project Manager",
      company: "Earlham College",
      companylogo: require("./assets/images/earlham.jpg"),
      date: "Nov. 2016 – Apr. 2021",
      desc: "",
      descBullets: [
        "Sole developer managing Earlham.edu and creating microsites for marketing and admissions",
"Maintained and enhanced user experience on the Umbraco CMS (ASP.NET with Razor) and Apostrophe CMS.",
"Mentored and trained up to four student developers on CMS platforms.",
"Collaborated with external vendors to ensure compliance with project requirements and deliverables.",
"Transitioned to WordPress, maintaining Umbraco while supporting new content creation on the platform."
      ]
    },
    {
      role: "Owner & Founder",
      company: "Farmer Brad LLC",
      companylogo: require("./assets/images/farmerbrad.png"),
      date: "March 2015 – Present",
      desc: "",
      descBullets: [
        "Raise Pastured Poultry and Grass Fed Lamb",
        "Make and sell Farmer Brad Automatic Chicken Waterer",
        "Offer Chicken Rental Packages"
      ]
    },
    {
      role: "Electronic Resource Analyst",
      company: "City of Sierra Madre",
      companylogo: require("./assets/images/cityofsierramadre.jpg"),
      date: "2014",
      desc: "Manage the complex functions of both the City's and the Library's electronic resources, including the City website, and digital content. Contribute to the development, implementation and evaluation of technology plans, polices and procedures. Located in the Library but work with all City departments.",
      descBullets: [
        
      ]
    },
    {
      role: "Software Engineer",
      company: "Liferay",
      companylogo: require("./assets/images/liferay.png"),
      date: "2010 – 2013",
      desc: "Worked in both Front End Department and Consulting Services",
      descBullets: [
        "Front End Developer",
        "Helped create Resources Importer to help in Theme Development"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Project",
  subtitle: "Various Projects I have worked on",
  projects: [
    {
      image: require("./assets/images/100 project.png"),
      projectName: "100 Projects",
      projectDesc: "Creating the most common web tools that people search for on the web",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://onehundred.bradwood.dev"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/americanskyport.png"),
      projectName: "American Skyport",
      projectDesc: "Designed Logo and Website for American Skyport LLC",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://americanskyport.com"
        }
      ]
    },
    {
      image: require("./assets/images/firstagrichmond.png"),
      projectName: "Richmond First Assembly of God",
      projectDesc: "Wordpress Site and Hosting for Richmond First Assembly of God",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://firstagrichmond.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Bringing your CMS into the 21st century",
      subtitle: "WebCon 2019"
    },
    {
      title: "Raising Chickens",
      subtitle: "Sustainable Backyard Flock - Indiana Homesteading Conference 2022",
      event_url: "https://www.indianahomesteadingconference.com/speaker-info/bradley-wood"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ",
  subtitle:
    "",
  //number: "+92-0000000000",
  //email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};