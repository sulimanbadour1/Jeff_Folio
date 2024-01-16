import * as icon from "react-icons/si";
import daloopa from "./logos/companies/daloopa.jpg";
import upwork from "./logos/companies/upwork.png";
import jumio from "./logos/companies/jumio.png";
//
const profile = {
  name: "Jafar Badour",
  role: "Machine Learning Engineer",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facere, itaque excepturi, necessitatibus cum ex nisi.",
};

const social = [
  { icon: icon.SiGithub, link: "https://github.com" },
  { icon: icon.SiCodepen, link: "https://www.medium.com/" },
  { icon: icon.SiTwitter, link: "https://www.twitter.com/" },
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
    name: "Front End",
    items: [
      { icon: icon.SiHtml5, name: "HTML" },
      { icon: icon.SiCss3, name: "CSS" },
      { icon: icon.SiBootstrap, name: "Bootstrap" },
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiTypescript, name: "Typescript" },
      { icon: icon.SiReact, name: "React" },
    ],
  },
  {
    name: "Back End",
    items: [
      { icon: icon.SiNodedotjs, name: "NodeJS" },
      { icon: icon.SiDeno, name: "Deno" },
      { icon: icon.SiMongodb, name: "MongoDB" },
      { icon: icon.SiFirebase, name: "Firebase" },
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
    date: "Apr 2023 - June 2022",
    points: [
      "Created DevOps pipelines (using Terraform framework) infrastructure to deploy ML solutions on AWS servers.",
      "Fine-tuned EasyOCR machine learning model on the annotated private documents to replace Amazon Textract.",
      "Led Data Warehouse project at Daloopa to design ETL in pipelines and produce actionable dashboards leading to an increase in the productivity of the sales team.",
    ],
  },
];

export { profile, social, work, stack, contact, brand, experiences };
