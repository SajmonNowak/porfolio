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
      "Mangoose",
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
    mainPage: true,
    colspan: 2,
    imgs: [
      "/images/inventoryapp/inventory.png",
      "/images/inventoryapp/inventory2.png",
      "/images/inventoryapp/inventory3.png",
      "/images/inventoryapp/inventory4.png",
    ],
    dim: {
      x: 1918,
      y: 980
    }
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
    mainPage: true,
    colspan: 2,
    desc: "Sed libero quam, ullamcorper non felis ac, suscipit egestas ex. Proin porttitor lacinia nisi sed efficitur. Etiam ac felis id diam volutpat volutpat ut quis urna. Proin convallis purus eget leo pharetra, vitae aliquet metus molestie. Aenean tellus lacus, ultricies sit amet scelerisque in, vestibulum nec purus. In semper mauris quis orci iaculis feugiat. Vivamus purus purus, vulputate et tortor a, pellentesque mattis magna. Proin et nisl sed erat cursus semper ac in tellus. Proin egestas lacus orci, ut congue lorem porttitor a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In efficitur massa in enim accumsan, porta ornare turpis imperdiet. Morbi gravida, lorem nec commodo consequat, purus ex dignissim odio, in imperdiet neque tortor vitae nibh. Proin scelerisque volutpat diam at venenatis. Nam nec massa eu lorem viverra tincidunt.",
    imgs: [
      "/images/battleships/battleships.png",
      "/images/battleships/battleships2.png",
      "/images/battleships/battleships3.png",
      "/images/battleships/battleships4.png",
    ],
    dim: {
      x: 1215,
      y: 873
    }
  },
  {
    name: "CV-Builder",
    videoURL: "/videos/cv.webm",
    gitHub:"https://github.com/SajmonNowak/CV/tree/master",
    live:"https://sajmonnowak.github.io/CV/",
    tags: ["React", "CSS"],
    desc: "My goal was to create my first React application that creates good looking CVs. At least better looking that my ordinary Word CVs. It was important for me to let the user decide how much experience and skills he wants to add to his CV. Thus, users can decide to delete or add new component instances. After adding all important information, the CV can be easily saved or printed.",
    bullets: ["Components", "Conditional Rendering", "Hooks, States and Props"],
    mainPage: true,
    colspan: 2,
    rowspan: 2,
    imgs: [
      "",
      "",

    ]
  },
  {
    name: "Travel Website",
    videoURL: "/videos/shop.webm",
    tags: ["React", "Styled Components", "GraphQL", "Gatsby"],
    desc: "",
    mainPage: true,
    colspan: 2,
  },
  {
    name: "Tic-Tac-Toe",
    videoURL: "/videos/tictactoe.webm",
    tags: ["JavaScript", "CSS"],
    desc: "",
    mainPage: true,
    colspan: 1,
  },
  {
    name: "Message Board",
    videoURL: "/videos/board.webm",
    tags: ["Express", "NodeJS"],
    desc: "",
    mainPage: true,
    colspan: 1,
  },
  {
    name: "Online Shop",
    videoURL: "/videos/shop.webm",
    tags: ["React", "Styled Components"],
    desc: "",
    mainPage: false,
    colspan: 4,
  },
  {
    name: "Etch-A-Sketch",
    videoURL: "/videos/etchasketch.webm",
    tags: ["JavaScript", "CSS", "HTML"],
    desc: "",
    mainPage: false,
    colspan: 1,
  },
  {
    name: "Weather App",
    videoURL: "/videos/weatherapp.webm",
    tags: ["JavaScript", "SCSS", "HTML"],
    desc: "",
    mainPage: false,
    colspan: 3,
  },
];

export default projectData;
