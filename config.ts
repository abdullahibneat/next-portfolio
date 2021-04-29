import { HomeProps } from "pages"

const home: HomeProps = {
    heroText: `<small style="font-weight: 400; font-size: 1rem; padding-bottom: 1rem;">👋 Hello world!</small><br/>I'm Abdullah, a <strong>software developer</strong> from London who loves crafting modern experiences for the web.`,
    skills: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dignissimos a! Sed nisi laborum porro asperiores veniam earum recusandae nesciunt incidunt vitae aliquid minus omnis dolorum, iste beatae voluptas dolor!",
        skills: [
            { name: "Full Stack Development", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis?" },
            { name: "Java and Kotlin Development", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis?" },
            { name: "Databases", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis?" },
            { name: "Git", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis?" }
        ]
    },
    testimonials: [
        { author: "Adam Smith", text: "Lorem ipsum dolor sit amet <strong>consectetur</strong> adipisicing elit. Corrupti mollitia voluptatibus <strong>aliquam</strong> maiores, nesciunt dolorum!" },
        { author: "John Smith", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quis natus perspiciatis vero facilis repellendus?" },
        { author: "John Doe", text: "Lorem ipsum dolor sit amet consectetur <strong>adipisicing</strong> elit. Autem, quis natus perspiciatis vero facilis repellendus?" },
    ]
}

export default {
    url: "https://abdu.io",
    name: "Abdullah Ibne Atiq",
    description: "My name is Abdullah, and I'm a computer science undergraduate student. Having worked with HTML/CSS/JavaScript, React, NodeJS, MongoDB and external APIs, I aspire to become a full stack developer.",
    github: "abdullahibneat",
    twitter: "@abdullahibneat",
    defaultImage: "https://via.placeholder.com/1280x720.png?text=Default+image",
    home
}