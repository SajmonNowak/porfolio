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
    desc: "My first full-stack project. Throughout this project I learned how to combine and share information between a front-end framework like React a self-made back-end. Users can decide to Create, Upadte, Read or Delete items in two different collections. Both collections consist of Schemas with common but also unique properties. Besides learning how to interact with a database, one of the more challanging parts was to understand the multer middleware and how images could be uploaded later displayed for the correct items.",
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
    desc: "Created the original Battleships game we all know from our childhood. Choosing React may not be the best idea for creating games, but i learned a lot by deciding to choose it over vanilla JavaScript.It took me some time to figure out how one might best implement a Controller in React and how to share states to all relevant components.Another challanging part were algorhithms (e.g. how to determine nearest cells of a ship or how the ai chooses where it attacks) aswell as the implementation of Drag&Drop functionality.",
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
    videoURL: "/videos/cv.webm",
    gitHub: "https://github.com/SajmonNowak/CV/tree/master",
    live: "https://sajmonnowak.github.io/CV/",
    tags: ["React", "CSS"],
    desc: "My goal was to create my first React application that creates good looking CVs. At least better looking that my ordinary Word CVs. It was important for me to let the user decide how much experience and skills he wants to add to his CV. Thus, users can decide to delete or add new component instances. After adding all important information, the CV can be easily saved or printed.",
    bullets: ["Components", "Conditional Rendering", "Hooks, States and Props"],
    colspan: {
      home: 2,
      project: 2,
    },
    rowspan: 2,
    imgs: ["/images/CV/CV.png", "/images/CV/CV2.png", "/images/CV/CV3.png"],
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
    desc: "A app based on the game 'Where is Waldo'. My first try to receive and send data to a database. Positions (pixel coordinates) of characters the player needs to find are saved in Firebase and are compared with the click position. After finding all characters, the players score is saved in the database where he can compare himself with other players. ",
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
    desc: "It is one of my very first and favorite projects. You can play with your friends or against an AI. I gave the game a pixelated retro design to remind the player of his childhood.  You can choose between two AI difficulties 'easy' (random field selections) and 'hard' (minimax algorhithm to choose the best field based on what the player would choose). Implementing the algorithm was challanging as a beginer but it was very fullfilling to observe my friends who could never beat it. This project also was my first attempt to follow OOP and to organize everything in objects.",
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
    desc: "My first back-end project. It is just a simple messaging app. Write something in a form and it will be displayed on the main page board. I used this project to learn how Express routing works and how to use templating engines to create Views.",
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
    tags: ["React", "Styled Components", "GraphQL", "Gatsby"],
    desc: "A landing page created with React, Styled Components and Gatsby. I learned how to utilize GraphQL to load data into React components and improved the styling of components.",
    bullets: [
      "GraphQL",
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
    desc: "Etch A Sketch is a drawing toy with which you can create pixelated art. This project marks my JavaScript beginings where i learned how to manipulate the DOM with event listeners and DOM methods.",
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
    desc: "Calculator with the functionality of addition, subtraction, division, multiplication, exponentiation and factorial. Regular expressions were used to read the inputs and perform the adequate operation. ",
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
    desc: "A simple weather application to test how API calls are working. This application gives information about the temeperature (current, average, min, max), time, and rain probability in every imaginable place. I included some icons to visualise if the weather is sunny, cloudy, partially cloudy, rainy or if it is snowing. I also implemented a rain animation that triggers and displays over the display when it is raining.",
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
    desc: "This project was created to primarily learn how routing works with React. I tried to make the shop feel modern and looking similar to other known online shops. It was also an opportunity deepen my React state understanding based on the functionality of online shop carts and filters. Styling was done with styled-components. It was a great opportunity to learn more about conditonal styling and style components based on passed properties",
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
