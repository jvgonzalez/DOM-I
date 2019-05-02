const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


const logo = document.getElementById("logo-img");
logo.setAttribute("src", "./../img/logo.png");


const firstimg = document.getElementById('cta-img'); 
firstimg.setAttribute("src", "./../img/header-img.png"); 

const nav0 = document.getElementsByTagName("a")[0].innerHTML=`${siteContent.nav["nav-item-6"]}`;
const nav1 = document.getElementsByTagName("a")[1].innerHTML=`${siteContent.nav["nav-item-1"]}`;
const nav2 = document.getElementsByTagName("a")[2].innerHTML=`${siteContent.nav["nav-item-2"]}`;
const nav3 = document.getElementsByTagName("a")[3].innerHTML=`${siteContent.nav["nav-item-3"]}`;
const nav4 = document.getElementsByTagName("a")[4].innerHTML=`${siteContent.nav["nav-item-4"]}`;
const nav5 = document.getElementsByTagName("a")[5].innerHTML=`${siteContent.nav["nav-item-5"]}`;
const nav6 = document.getElementsByTagName("a")[5].innerHTML=`${siteContent.nav["nav-item-6"]}`;



const newNav = document.getElementsByTagName("nav")[0]

let newA = document.createElement("a")

newA.textContent="Find more"

newNav.appendChild(newA);

const newNav1 = document.getElementsByTagName("nav")[0]

let newA1 = document.createElement("a")

newA1.textContent="Follow us"

newNav1.prepend(newA1);


const nav1Green = document.getElementsByTagName("a")[0].style.color="green"
const nav2Green = document.getElementsByTagName("a")[1].style.color="green"
const nav3Green = document.getElementsByTagName("a")[2].style.color="green"
const nav4Green = document.getElementsByTagName("a")[3].style.color="green"
const na5Green = document.getElementsByTagName("a")[4].style.color="green"
const nav6Green = document.getElementsByTagName("a")[5].style.color="green"
const nav7Green = document.getElementsByTagName("a")[6].style.color="green"
const nav8Green = document.getElementsByTagName("a")[7].style.color="green"


const header = document.getElementsByTagName("h1")[0].innerHTML =`${siteContent.cta.h1}`
const button = document.getElementsByTagName("button")[0].innerHTML =`${siteContent.cta.button}`
const imgsrc = document.getElementById("middle-img")
imgsrc.src = "./../img/mid-page-accent.jpg"

const feat = document.getElementsByTagName("h4")[0].innerHTML=`${siteContent["main-content"]["features-h4"]}`;
const feat1 = document.getElementsByTagName("h4")[1].innerHTML =`${siteContent["main-content"]["about-h4"]}`;
const feat2 = document.getElementsByTagName("h4")[2].innerHTML =`${siteContent["main-content"]["services-h4"]}`;
const feat3 = document.getElementsByTagName("h4")[3].innerHTML = `${siteContent["main-content"]["product-h4"]}`;
const feat4 = document.getElementsByTagName("h4")[4].innerHTML = `${siteContent["main-content"]["vision-h4"]}`;

const p4 = document.getElementsByTagName("p")[4].innerHTML = `${siteContent["main-content"]["vision-content"]}`;

const p3 = document.getElementsByTagName("p")[3].innerHTML = `${siteContent["main-content"]["product-content"]}`;

const p2 = document.getElementsByTagName("p")[2].innerHTML = `${siteContent["main-content"]["services-content"]}`;

const p1 = document.getElementsByTagName("p")[1].innerHTML = `${siteContent["main-content"]["about-content"]}`;

const p0 = document.getElementsByTagName("p")[0].innerHTML = `${siteContent["main-content"]["features-content"]}`;


const contacth4 = document.getElementsByTagName("h4")[5].innerHTML = `${siteContent["contact"]["contact-h4"]}`;

const address  = document.getElementsByTagName("p")[5].innerHTML = `${siteContent["contact"]["address"]}`;

const phone = document.getElementsByTagName("p")[6].innerHTML = `${siteContent["contact"]["phone"]}`;

const email = document.getElementsByTagName("p")[7].innerHTML = `${siteContent["contact"]["email"]}`;

const footer = document.getElementsByTagName("p")[8].innerHTML = `${siteContent["footer"]["copyright"]}`;








