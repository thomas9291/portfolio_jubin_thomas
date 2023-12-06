import { Project } from "../../project.model";

export const projectArray: Project[] = [
  {
    projectId: "p5",
    title: "Kitsune Art Gallery",
    programs: [
      "html",
      "css",
      "javascript",
      "tailwind",
      "aws",
      "vercel",
      "github",
      "visualStudio",
    ],
    date: "dec 2023",
    description:
      "This is a full-stack project employing Next.js and React for the frontend, while Node.js powers the backend. Design elements were crafted using Tailwind CSS and traditional CSS. Microservices are implemented using the AWS SDK, with DynamoDB serving as the database and AWS S3 for image storage. Additionally, local storage functionality allows each user to leave a note on the artwork. The website functions as an art gallery, enabling users to add photos, provide ratings, and leave comments. Notably, the site is responsive, ensuring a seamless experience across various devices.",
    videoURL:
      "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/kitsune-art-galery.mp4",
    linkURL: "https://kitsune-art-gallery.vercel.app",
    codeURL: "https://github.com/thomas9291/kitsune-art-gallery",
  },
  {
    projectId: "p1",
    title: "Fitness App",
    programs: [
      "html",
      "css",
      "bootstrap",
      "mongodb",
      "nextjs",
      "reactjs",
      "visualStudio",
      "github",
      "vercel",
    ],
    date: "sep 2023",
    description:
      "This is a full-stack project developed with React.js, Next.js, CSS, Bootstrap, MongoDB, and Mongoose. It is a fitness website designed for individuals looking to train effectively with a personalized weight adaptation plan. Thanks to a dedicated user database, users can track their progress and monitor their improvements over time.",
    videoURL:
      "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/fitness-app.mp4",
    linkURL: "https://fitness-app-ten-rosy.vercel.app",
    codeURL: "https://github.com/thomas9291/fitness-app",
  },
  {
    projectId: "p2",
    title: "Fishing Place App",
    programs: [
      "html",
      "reactjs",
      "nextjs",
      "css",
      "bootstrap",
      "mongodb",
      "visualStudio",
      "github",
      "vercel",
    ],
    date: "jul 2023",
    description:
      "This is a full-stack project and served as my final project during my time at the Spiced Academy boot camp in Berlin. It was developed using React.js, Next.js, CSS, Bootstrap, MongoDB, and Mongoose. This application functions as a kind of clone of Google Maps, tailored for fishermen who wish to keep track of their favorite fishing spots. Users can also filter their preferred spots based on various options, such as finding a good place for camping. With their own database, users have the ability to upload their photos and have exclusive access to them.",
    videoURL:
      "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/fishing-place-app.mp4",
    linkURL: "https://fishing-place.vercel.app/",
    codeURL: "https://github.com/thomas9291/fishing-place",
  },
  {
    projectId: "p3",
    title: "Frontend App",
    programs: ["javascript", "css", "html", "visualStudio", "github", "vercel"],
    date: "Apr 2022",
    description:
      "This is a frontend project developed using Vanilla JavaScript, CSS, and HTML. In this project, I work with an API that provides me with photos and information about films, whether they are recent or old. By entering the name of a film or an actor, you can discover several films related to your search.",
    videoURL:
      "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/frontend-app.mp4",
    linkURL: "https://frontend-app-omega.vercel.app/",
    codeURL: "https://github.com/thomas9291/frontend-app",
  },
  {
    projectId: "p4",
    title: "Weather App",
    programs: ["reactjs", "css", "visualStudio", "github", "vercel", "html"],
    date: "May 2023",
    description:
      "This is a React frontend project developed with React.js and CSS. In this project, I work with an API that provides me with random weather data, and I store and process this data in the local storage. Depending on the weather conditions, we can create a list of activities to do.",
    videoURL:
      "https://portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com/weather-app.mp4",
    linkURL: "https://weather-app-two-rosy.vercel.app/",
    codeURL: "https://github.com/thomas9291/weather-app",
  },
];
