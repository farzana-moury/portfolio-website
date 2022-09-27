import app2 from "../../images/portfolio images/LoveBirds.png"
import app3 from "../../images/portfolio images/cookieCorner.png"
import app4 from "../../images/portfolio images/pocketLibrary.png"

import app7 from "../../images/portfolio images/stevenUniverse.png"
import app8 from "../../images/portfolio images/hummus.png"

import game1 from "../../images/portfolio images/fruitManiaApp.png"

import web1 from "../../images/portfolio images/portfolio.PNG"
import web2 from "../../images/portfolio images/madWebsite.png"

import other1 from "../../images/portfolio images/plantsman.png"


export const apps = [
    {
        id: 1,
        title: "99 Names of Allah",
        img:
        "https://github.com/farzana-moury/99-Names-Of-Allah/raw/main/app_icon.png",
        url:
        "https://github.com/farzana-moury/99-Names-Of-Allah",
        languages:
        "JAVA / ANDROID STUDIO",
        description:
        "An application dedicated to reading and memorizing the 99 beautiful names of Allah. It is intended for all audiences (not just Muslims) and maintains a simple UI with a memorization feature that helps you train your knowledge.",
        hasUrl: true
    },

    {
        id: 2,
        title: "LoveBirds",
        img:
        app2,
        url:
        "https://github.com/farzana-moury/LoveBirdsApp",
        languages:
        "DART / FLUTTER",
        description:
        "LoveBirds Wedding Planner is both an app and website made for couples who need a hassle-free and efficient way to plan their wedding. It makes it easy to navigate through lists of all wedding related tasks, keeping track of guests, viewing and adding vendors, and managing the overall budget.",
        hasUrl: true
    },

    {
        id: 3,
        title: "Cookie Corner",
        img:
        app3,
        url:
        "https://github.com/farzana-moury/CookieCorner",
        languages:
        "JAVA / ANDROID",
        description: 
        "An information app that simulates ordering cookies from a bakery. It implements the UI features of an ordering app and custom tools that mimic the process of viewing a menu and ordering from that menu. It also contains baking recipes and additional features.",
        hasUrl: true
    },
    
    {
        id: 4,
        title: "Pocket Library",
        img:
        app4,
        url:
        "https://github.com/farzana-moury/Pocket-Library",
        languages:
        "JAVA / ANDROID / OPEN LIBRARY API",
        description:
        "Pocket Library is a virtual library app that lets you browse for books and store them for reference purposes later in your bookshelf. It is useful in helping you keep track of the books you would like to read or purchase down the line.",
        hasUrl: true
    },

    {
        id: 5,
        title: "foodstuffs",
        img: 
        "https://github.com/farzana-moury/foodstuffs/raw/main/foodstuffs/foodstuffs/Assets.xcassets/AppIcon.appiconset/foodstuffs-1024.png",
        url:
        "https://github.com/farzana-moury/foodstuffs",
        languages:
        "SWIFT / XCODE / IOS",
        description:
        "A simple to use grocery list app, foodstuffs is perfect for on the go. You can use this app as a checklist for your groceries, and see how much progress you've made with each item checked off the list.",
        hasUrl: true
    },

    {
        id: 6,
        title: "ABC Animals",
        img:
        "https://github.com/farzana-moury/ABC-Animals/raw/main/ABCAnimals/src/Backgrounds/intro.png",
        url:
        "https://github.com/farzana-moury/ABC-Animals",
        languages:
        "JAVA / JAVAFX",
        description:
        "ABC Animals is an interactive JavaFX based application that helps kids learn the alphabet letters, sounds, and words. It implements phonics as well with the use of sounds to support each letter.",
        hasUrl: true
    },

    {
        id: 7,
        title: "Steven Universe Paint Program",
        img:
        app7,
        languages:
        "PYTHON",
        description: 
        "A python based fully fledged paint program that utilises all tools for creating a ✨ work of art ✨. Graphics and use of tools was inspired by Rebecca Sugar's Steven Universe cartoon.",
        hasUrl: false
    },

    {
        id: 8,
        title: "Hummus Restaurant Management System",
        img:
        app8,
        url:
        "https://github.com/farzana-moury/ManagementSystem",
        languages:
        "JAVA / JAVAFX / JDBC ",
        description:
        "This was a JavaFX based application using JDBC Driver to handle database operations in a small scale version of a restaurant database management system.",
        hasUrl: true
    }
];

export const games = [
    {
        id: 1,
        title: "FruitMania: A Space Adventure",
        img:
        game1,
        languages: 
        "C# / UNITY",
        description:
        "This was a fun 2D pixelated adventure game that I made.\n I put alot of effort into the level design and overall functionality, so the player could have a progressively difficult experience with each level they completed. Each new level contains different obstacles, enemies, and physics.",
        hasUrl: false,
    },
];

export const websites = [
    {
        id: 1,
        title: "Portfolio Website",
        img:
        web1,
        url:
        "https://github.com/farzana-moury/portfolio-website",
        languages:
        "REACT / BOOTSTRAP",
        description: 
        "This is my updated portfolio website, the one that you're viewing right now 😆",
        hasUrl: true
    },

    {
        id: 2,
        title: "MAD Website",
        img:
        web2,
        url:
        "https://fmoury.scweb.ca/WEB210_FINAL_PROJECT/scwebMAD.html",
        languages:
        "HTML / CSS",
        description:
        "A website made for the Mobile Applications Development Program at St. Clair College. This website contains relevant course information, outlines program overview and pathways, requirements to enroll, testimonials, FAQ and additional information.",
        hasUrl: true
    },
];

export const other = [
    {
        id: 1,
        title: "Plantsman",
        img:
        other1,
        languages:
        "ADOBE XD / UX / UI / PROTOTYPE",
        description:
        "A fully interactive UX/UI prototype of Plantsman, a sophisticated e-commerce application for plants. It includes both lo-fi and hi-fi protoypes, user stories, research and personas. It also contains branding, layout and a beautiful visual design.",
        hasUrl: false
    },
];

export const all = [
    apps[0], apps[1], apps[2], apps[3], apps[4], apps[5], apps[6], apps[7],
    games[0],
    websites[0], websites[1],
    other[0]
];
