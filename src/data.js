import * as icon from "react-icons/si";
import daloopa from "./logos/companies/daloopa.jpg";
import upwork from "./logos/companies/upwork.png";
import jumio from "./logos/companies/jumio.png";
// import neerc from "./logos/awards/neerc.png";
// import face from "./logos/awards/face.webp";
// import meta from "./logos/awards/meta.png";
// import google from "./logos/awards/google.png";
// import aws from "./logos/awards/aws.png";
//Project Images
import c2montreal from "./logos/projects/landingblog.webp";
import officestudio from "./logos/projects/northface.webp";
import locomotive from "./logos/projects/tenso.webp";
//Service Images
import ml from "./logos/services/ml.png";
import bot from "./logos/services/bot.png";
import backend from "./logos/services/backend.png";
import data from "./logos/services/data.png";
const profile = {
  name: "Jafar Badour",
  role: "Machine Learning Engineer",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facere, itaque excepturi, necessitatibus cum ex nisi.",
};

const social = [
  { icon: icon.SiGithub, link: "https://github.com" },
  { icon: icon.SiUpwork, link: "https://www.upwork.com/" },
  { icon: icon.SiLinkedin, link: "https://www.linkedin.com/" },
  { icon: icon.SiInstagram, link: "https://www.instagram.com/" },
];

const brand = "JB";

const work = [
  {
    name: "Todo app",
    description:
      "Phasellus metus mi, scelerisque eu volutpat non, posuere et massa. Nunc hendrerit, augue non fringilla mattis.",
    stack: [
      { icon: icon.SiHtml5, name: "HTML" },
      { icon: icon.SiCss3, name: "CSS" },
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiReact, name: "ReactJS" },
    ],
    linkProject: "https://example.com",
    linkGithub: "https://github.com",
  },
  {
    name: "Pokedex",
    description:
      "Etiam eget volutpat risus. Nam magna bibendum a metus dignissim, id eleifend libero luctus molestie eget.",
    stack: [
      { icon: icon.SiHtml5, name: "HTML" },
      { icon: icon.SiCss3, name: "CSS" },
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiReact, name: "ReactJS" },
    ],
    linkProject: "https://example.com",
    linkGithub: "https://github.com",
  },
  {
    name: "E-Commerce",
    description:
      "Nullam id mauris auctor, sollicitudin sapien id, sagittis turpis proin et nunc sempe, venenatis erat.",
    stack: [
      { icon: icon.SiHtml5, name: "HTML" },
      { icon: icon.SiCss3, name: "CSS" },
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiReact, name: "ReactJS" },
    ],
    linkProject: "https://example.com",
    linkGithub: "https://github.com",
  },
  {
    name: "Twitter clon",
    description:
      "Cras leo mauris, gravida vel lectus ac, congue luctus odio. Sed varius varius est eget convallis sagittis sit amet.",
    stack: [
      { icon: icon.SiHtml5, name: "HTML" },
      { icon: icon.SiCss3, name: "CSS" },
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiReact, name: "ReactJS" },
    ],
    linkProject: "https://example.com",
    linkGithub: "https://github.com",
  },
];

const stack = [
  {
    name: "Tech Stack",
    items: [
      { icon: icon.SiPython, name: "Python" },
      { icon: icon.SiCplusplus, name: "CPP" },
      { icon: icon.SiPytorch, name: "PyTorch" },
      { icon: icon.SiDjango, name: "Django" },
      { icon: icon.SiTensorflow, name: "Tensorflow" },
      { icon: icon.SiKeras, name: "Keras" },
      { icon: icon.SiFlask, name: "Flask" },
      { icon: icon.SiUbuntu, name: "Ubuntu" },
      { icon: icon.SiDocker, name: "Docker" },
      { icon: icon.SiGit, name: "Git" },
      { icon: icon.SiAmazonaws, name: "Amazon" },
      { icon: icon.SiGooglecloud, name: "Google Cloud" },
      { icon: icon.SiMicrosoftazure, name: "Microsoft Azure" },
      { icon: icon.SiHeroku, name: "Heroku" },
      { icon: icon.SiJupyter, name: "Jupyter" },
      { icon: icon.SiRedhatopenshift, name: "RedShift" },
      { icon: icon.SiApachecassandra, name: "Cassandra" },
      { icon: icon.SiApachekafka, name: "Kafka" },
      { icon: icon.SiCelery, name: "Celery" },
      { icon: icon.SiDataversioncontrol, name: "Data Warehousing" },
      { icon: icon.SiApacheairflow, name: "Airflow" },
      { icon: icon.SiRedis, name: "Redis" },
      { icon: icon.SiNginx, name: "Nginx" },
      { icon: icon.SiGnubash, name: "Bash" },
    ],
  },
];

const contact = {
  description:
    "Tenetur laudantium? Aliquid ipsum perferendis blanditiis non. Adipisci eos numquam reiciendis, rerum, quo similique reprehenderit. Adipisci eos numquam reiciendis",
  email: "example@email.com",
};

const experiences = [
  {
    title: "Machine Learning Engineer L4, Full-time",
    company_name: "Daloopa Inc",
    icon: daloopa, // Replace with the actual image path
    iconBg: "#012060",
    date: "Aug 2023 - Now",
    points: [
      "Created an autotagger system that automatically detects key, value business metrics in SEC and private companies filings.",
      "Developed a pipeline for detecting labeling errors in text data, which had a high impact on reducing churn rate of clients.",
    ],
  },
  {
    title: "Machine Learning Engineer L4, Part-time (Remote)",
    company_name: "Kalosfloria Inc",
    icon: upwork, // Replace with the actual image path
    iconBg: "#012060",
    date: "Jul 2023 - Now",
    points: [
      "Created a system to automatically detect line items from financial sheets for warehouses receipts and invoices.",
      "Designed the deployment for machine learning models developed by the team data scientist on the company servers.",
    ],
  },
  {
    title: "Machine Learning Engineer L4, Contractor",
    company_name: "Jumio Corporation",
    icon: jumio, // Replace with the actual image path
    iconBg: "#012060",
    date: "Aug 2022 - June 2023",
    points: [
      "Utilized PaddleOCR to implement a new approach for text detection for Chinese (Taiwan and China) for classified IDs in south Asia.",
      "Designed Sagemaker jobs for iterative training for OCR models.",
      "Created MLOps Dags in airflow for creation, preprocessing and training of field-mapping (map fields on images to the respective labels) models.",
    ],
  },
  {
    title: "Machine Learning Engineer/ Backend developer L3 (Remote)",
    company_name: "Daloopa Inc",
    icon: daloopa, // Replace with the actual image path
    iconBg: "#012060",
    date: "April 2021 - June 2022",
    points: [
      "Created DevOps pipelines (using Terraform framework) infrastructure to deploy ML solutions on AWS servers.",
      "Fine-tuned EasyOCR machine learning model on the annotated private documents to replace Amazon Textract.",
      "Led Data Warehouse project at Daloopa to design ETL in pipelines and produce actionable dashboards leading to an increase in the productivity of the sales team.",
    ],
  },
];

// const awards = [
//   {
//     title: "NEERC",
//     description: "NEERC",
//     icon: neerc,
//   },
//   {
//     title: "FACEBOOK HACKER CUP",
//     description: "FACEBOOK HACKER CUP",
//     icon: face,
//   },
//   {
//     title: "META HACKATHON",
//     description: "META HACKATHON",
//     icon: meta,
//   },
//   {
//     title: "Google Kickstart",
//     description: "Google Kickstart",
//     icon: google,
//   },
//   {
//     title: "Amazon HackOn",
//     description: "Amazon Hackathon",
//     icon: aws,
//   },
// ];

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
    label: "Machine Learning",
    icon: icon.SiGithub,
    description:
      "C2 Montreal is a creative conference that explores the relationship between commerce and creativity.",
    link: "https://www.github.com/",
    image: c2montreal,
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
    label: "NLP",
    icon: icon.SiGithub,
    description:
      "Office Studio is a creative conference that explores the relationship between commerce and creativity.",
    link: "https://www.github.com/",
    image: officestudio,
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
    label: "AI",
    icon: icon.SiGithub,
    description:
      "Locomotive is a creative conference that explores the relationship between commerce and creativity.",
    link: "https://www.github.com/",
    image: locomotive,
  },
];

const services = [
  {
    title1: "Machine",
    title2: "Learning",
    src: ml,
  },
  {
    title1: "Artificial",
    title2: "Intelligence",
    src: bot,
  },
  {
    title1: "Back-end",
    title2: "Development",
    src: backend,
  },
  {
    title1: "Data",
    title2: "Science",
    src: data,
  },
];
export {
  profile,
  social,
  work,
  stack,
  contact,
  brand,
  experiences,
  projects,
  services,
};
