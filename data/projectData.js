const projectData = [
  {
    name: "Inventory App",
    videoURL: "/videos/inventory.webm",
    gitHub: "https://github.com/SajmonNowak/inventory",
    live: "https://protected-stream-96554.herokuapp.com/#/",
    tags: [
      "Express",
      "NodeJS",
      "MongoDB",
      "React",
      "Styled Components",
      "Heroku",
    ],
    desc: "My first full-stack project. Throughout this project, I learned how to combine and share information between a front-end framework like React and a back-end. Users can decide to create, update, read or delete items in two different collections. Both collections consist of schemas with common but also unique properties. Besides learning how to interact with a database, one of the more challenging parts was to understand the multer middleware and how to upload images with the help of saving its location path with MongoDB.",
    bullets: [
      "Routing & Dynamic Routes",
      "CRUD - Creating, Reading, Updating, Deleting",
      "Uploading images with multer",
      "Mangoose Schemas, Models & Queries",
      "Error Handling",
      "Axios",
    ],
    colspan: {
      home: 2,
      project: 2,
    },
    imgs: [
      "/images/inventoryapp/inventory.png",
      "/images/inventoryapp/inventory2.png",
      "/images/inventoryapp/inventory3.png",
      "/images/inventoryapp/inventory4.png",
    ],
    dim: {
      x: 1918,
      y: 980,
    },
  },
  {
    name: "Battleships",
    videoURL: "/videos/battleships.webm",
    gitHub: "https://github.com/SajmonNowak/Battleship",
    live: "https://sajmonnowak.github.io/Battleship/",
    tags: ["React", "Styled Components"],
    desc: "I believe we all know the Battleships game from our childhood. Choosing React to create a game turned out to be a challenge, but I learned a lot by going with this option over vanilla JavaScript. It was challenging to figure out how one might best implement a controller and components with so many different possible events and states. This game includes several algorithms. For example, an algorithm to determine the nearest cells of a ship or to find out how the ai should choose where to attack next. I also integrated a Drag&Drop functionality because it felt more intuitive.",
    bullets: [
      "Drag&Drop functionality",
      "Factory functions",
      "useReducer",
      "useContext",
    ],
    colspan: {
      home: 2,
      project: 2,
    },

    imgs: [
      "/images/battleships/battleships.png",
      "/images/battleships/battleships2.png",
      "/images/battleships/battleships3.png",
      "/images/battleships/battleships4.png",
    ],
    dim: {
      x: 1215,
      y: 873,
    },
  },
  {
    name: "CV-Builder",
    videoURL: "/videos/cv2.webm",
    gitHub: "https://github.com/SajmonNowak/CV/tree/master",
    live: "https://sajmonnowak.github.io/CV/",
    tags: ["React", "CSS"],
    desc: "My goal was to create my first React application that generates good-looking CVs. At least better looking than my ordinary CVs created with Word. The user can decide how much experience and which skills he wants to add to his CV.  Users can delete or add new component instances and thus extend the size of their CV. He can also change the primary and secondary colors of the CV. After adding all the important information, the CV can be easily saved or printed. The CV was not intended to be longer than one page, so no further functionality was added for creating multiple pages.",
    bullets: ["Components", "Conditional Rendering", "Hooks, States and Props"],
    colspan: {
      home: 2,
      project: 2,
    },
    rowspan: 2,
    imgs: ["/images/CV/CV4.png", "/images/CV/CV5.png", "/images/CV/CV6.png"],
    dim: {
      x: 864,
      y: 964,
    },
  },
  {
    name: "Waldo",
    videoURL: "/videos/waldo.webm",
    gitHub: "https://github.com/SajmonNowak/Waldo",
    live: "https://sajmonnowak.github.io/Waldo/",
    tags: ["React", "Styled Components", "FireBase"],
    desc: "A game based on the book series 'Where is Waldo'. It was my first attempt to receive and send data to a database. Character positions (pixel coordinates) are saved in Firebase and are compared with the player's desktop click position.  The players' scores are saved in the database where they can compare themselves with other players.",
    bullets: ["Firestore", "Custom hooks", "API", "Conditional styling"],
    colspan: {
      home: 0,
      project: 2,
    },
    imgs: [
      "/images/waldo/waldo.png",
      "/images/waldo/waldo2.png",
      "/images/waldo/waldo3.png",
      "/images/waldo/waldo4.png",
      "/images/waldo/waldo5.png",
      "/images/waldo/waldo6.png",
    ],
    dim: {
      x: 1900,
      y: 835,
    },
  },

  {
    name: "Tic-Tac-Toe",
    videoURL: "/videos/tictactoe.webm",
    tags: ["JavaScript", "CSS", "HTML"],
    gitHub: "https://github.com/SajmonNowak/Tic-Tac-Toe",
    live: "https://sajmonnowak.github.io/Tic-Tac-Toe/",
    desc: "This was one of my first JavaScript projects. Users can  chose to play with their friends or against an AI. I gave the game a pixelated retro design to remind the player of the good old times spent in arcade rooms. Players can play against two types of AI : 'easy' (random field selections) and 'hard' (minimax algorithm to choose the best field based on what the player would choose). Implementing the algorithm was challenging as a JavaScirpt beginner but it was ultimately very fulfilling to see my friends failing to beat the AI. I used this project also to learn and follow Object-Oriented Programing principles and to organize everything in objects.",
    bullets: [
      "Object-Oriented Programming",
      "Minimax algorithm",
      '"AI" / Controller',
      "Factory Functions",
    ],
    colspan: {
      home: 1,
      project: 1,
    },

    imgs: [
      "/images/tictactoe/tictactoe.png",
      "/images/tictactoe/tictactoe2.png",
      "/images/tictactoe/tictactoe3.png",
      "/images/tictactoe/tictactoe4.png",
    ],
    dim: {
      x: 1189,
      y: 800,
    },
  },
  {
    name: "Message Board",
    videoURL: "/videos/board.webm",
    tags: ["Express", "NodeJS", "Handlebars", "CSS", "Heroku"],
    gitHub: "https://github.com/SajmonNowak/messageApp",
    live: "https://mighty-refuge-15538.herokuapp.com/",
    desc: "My first back-end project. It is a simple messaging app where users can write anything to display it on the main page. I used this project to learn how Express routing works and how to use templating engines to create Views.",
    bullets: ["Routing", "Views", "Deployment with Heroku"],
    colspan: {
      home: 0,
      project: 1,
    },

    imgs: [
      "/images/message/message.png",
      "/images/message/message2.png",
      "/images/message/message3.png",
    ],
    dim: {
      x: 1750,
      y: 969,
    },
  },
  {
    name: "Travel Website",
    videoURL: "/videos/travelwebsite.webm",
    gitHub: "https://github.com/SajmonNowak/travelWebsite",
    live: "https://sajmonnowak.github.io/travelWebsite/",
    tags: ["React", "Styled Components", "GraphQl", "Gatsby"],
    desc: "A landing page that was created with React, Styled Components, and Gatsby. I learned about static site generators, the importance of image optimization, and how to utilize GraphQl to load data into React components.",
    bullets: [
      "GraphQl",
      "Landing Page",
      "Conditional Styling",
      "Responsiveness",
    ],
    colspan: {
      home: 2,
      project: 4,
    },

    imgs: [
      "/images/travel/travel.png",
      "/images/travel/travel2.png",
      "/images/travel/travel3.png",
      "/images/travel/travel4.png",
    ],
    dim: {
      x: 1890,
      y: 800,
    },
  },
  {
    name: "Etch-A-Sketch",
    videoURL: "/videos/etchasketch.webm",
    tags: ["JavaScript", "CSS", "HTML"],
    gitHub: "https://github.com/SajmonNowak/Etch-a-Sketch",
    live: "https://sajmonnowak.github.io/Etch-a-Sketch/",
    desc: "Etch A Sketch is a drawing toy with which users can create pixelated art. This project marks my JavaScript beginnings. I learned how to manipulate the DOM with event listeners and DOM methods.",
    bullets: ["DOM Manipulation", "Event Listeners"],
    colspan: {
      home: 1,
      project: 1,
    },

    imgs: [
      "/images/etchasketch/etchasketch.png",
      "/images/etchasketch/etchasketch2.png",
      "/images/etchasketch/etchasketch3.png",
    ],
    dim: {
      x: 950,
      y: 950,
    },
  },
  {
    name: "Calculator",
    videoURL: "/videos/calculator.webm",
    gitHub: "https://github.com/SajmonNowak/Calculator",
    live: "https://sajmonnowak.github.io/Calculator/",
    tags: ["JavaScript", "CSS", "HTML"],
    desc: "Calculator with the functionality of addition, subtraction, division, multiplication, exponentiation and factorials.  I learned a lot about regular expressions. Regular expressions were used to read the users calculator inputs and to perform the according operations.",
    bullets: [
      "Mathematical operations",
      "DOM Manipulation",
      "Arrays",
      "Regular Expressions",
    ],
    colspan: {
      home: 0,
      project: 1,
    },

    imgs: [
      "/images/calculator/calculator.png",
      "/images/calculator/calculator2.png",
      "/images/calculator/calculator3.png",
    ],
    dim: {
      x: 940,
      y: 760,
    },
  },
  {
    name: "Weather App",
    videoURL: "/videos/weatherapp.webm",
    gitHub: "https://github.com/SajmonNowak/WeatherApp",
    live: "https://sajmonnowak.github.io/WeatherApp/",
    tags: ["JavaScript", "Sass", "HTML"],
    desc: "A simple weather application to get familiar with API calls. This application displays information about the temperature (current, average, min, max), time, and rain probability in every imaginable place. I included some icons to visualize if the weather is sunny, cloudy, partially cloudy, rainy, or if it snows. I also implemented a rain animation that triggers and displays over the display when it is raining in a location.",
    bullets: [
      "Weather and Geocode API",
      "Asynchronous Code and Promises",
      "NPM",
      "SCSS",
      "Responsiveness",
    ],
    colspan: {
      home: 1,
      project: 2,
    },

    imgs: [
      "/images/weather/weather.png",
      "/images/weather/weather2.png",
      "/images/weather/weather3.png",
      "/images/weather/weather4.png",
    ],
    dim: {
      x: 1143,
      y: 800,
    },
  },
  {
    name: "Online Shop",
    videoURL: "/videos/shop.webm",
    gitHub: "https://github.com/SajmonNowak/shopping-cart",
    live: "https://sajmonnowak.github.io/shopping-cart",
    tags: ["React", "Styled Components"],
    desc: "This project was created to primarily learn how routing with React works. The shop has intended to have a modern feel. I have deepen my understanding of states in React based on the typical must-have functionality of an online shop like a cart and filters. Styling was done with styled-components. It was a great opportunity to learn more about conditional styling and style components based on passed properties.",
    bullets: [
      "React Router",
      "Links",
      "React states",
      "Online shop cart and filter functionality",
      "Conditional styling",
    ],
    colspan: {
      home: 3,
      project: 4,
    },
    imgs: [
      "/images/shop/shop.png",
      "/images/shop/shop2.png",
      "/images/shop/shop3.png",
      "/images/shop/shop4.png",
      "/images/shop/shop5.png",
    ],
    dim: {
      x: 1587,
      y: 954,
    },
  },
];

export default projectData;
