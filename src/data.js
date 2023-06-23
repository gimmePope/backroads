import tourImg1 from './images/tour-1.jpeg'
import tourImg2 from './images/tour-2.jpeg'
import tourImg3 from './images/tour-3.jpeg'
import tourImg4 from './images/tour-4.jpeg'


export const links = [
{id:1 , href:"#home", text: "Home" },
{id:2 , href:"#about", text: "About" },
{id:3 , href:"#services", text: "Services" },
{id:4 , href:"#tours", text: "Tours" },
];

export const socialLinks = [
    {id:11 , href:"https://www.twitter.com", iconText: "fab fa-facebook", target: "_blank" },
    {id:12 , href:"https://www.twitter.com", iconText: "fab fa-twitter", target: "_blank" }, 
    {id:13 , href:"https://www.twitter.com", iconText: "fab fa-squarespace", target: "_blank" },      
];

export const services = [
    {id: 1, icon: "fas fa-wallet fa-fw", title: "saving money", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."},
    {id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."},
    {id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."},
]

export const tourInfos = [
    {id: 1, imgScr: tourImg1, title: "Tibet Adventure", tourDate: "august 26th, 2020", text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",  location: "china", duration: 6, cost: 2100},
    {id: 2, imgScr: tourImg2, title: "best of java", tourDate: "october 1th, 2020", text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "indonesia", duration: 11, cost: 1400},
    {id: 3, imgScr: tourImg3, title: "explore hong kong", tourDate: "september 15th, 2020", text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "hong kong", duration: 8, cost: 5000},
    {id: 4, imgScr: tourImg4, title: "kenya highlights", tourDate: "december 5th, 2022", text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "kenya", duration: 20, cost: 3300},
]