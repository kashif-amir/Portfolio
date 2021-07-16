/* eslint-disable max-len */
export interface ISocial{
  name: 'LinkedIn' |
  'Behance' |
  'Github' |
  'Instagram' |
  'Facebook';
  url: string;
}

export interface ICertification{
  name: string;
  issuedBy: string;
  verificationURL: string;
}

export interface IProject{
  imageUrl?: string;
  name: string;
  companyName: string;
  url: string;
  description: string[];
  tags: string[];
}

export interface IExperience{
  shortName: string;
  companyName: string;
  endDate: string;
  position: string;
  startDate: string;
  summary: string;
  website: string;
}

export interface ISkill{
  languages: string[];
  frameworks: string[];
  tools: string[];
  design: string[];
  devtools: string[];
}

export interface IStudent{
  avatar: string;
  name: string;
  quote: string;
}

export interface IProfile{
  name: string;
  intro: string;
  skills?: ISkill;
  phone: string;
  email: string;
  socials: ISocial[];
  bio: string[];
  students?: IStudent[];
  experiences?: IExperience[];
  certifications?: ICertification[];
  projects?: IProject[];
  goodByeText: string;
}

const profile : IProfile = {
  name: 'Muhammad kashif',
  intro: 'I am a software engineer and working on react.',
  students: [
    {
      name: 'Ubaid',
      avatar: 'https://media-exp1.licdn.com/dms/image/C5103AQHNewoR5FzCaQ/profile-displayphoto-shrink_400_400/0/1587200960601?e=1623888000&v=beta&t=mquh0pdkolkg1VWbpkIKU2BlskgnfJSyNhTxyowWVU8',
      quote: 'BSCS from FAST University Islamabad',
    },
    {
      name: 'Umair Zafar',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEnZr7IWnstyQ/profile-displayphoto-shrink_400_400/0/1615956840787?e=1623888000&v=beta&t=HtxlJheHPxhmfW9J0M7gxlzDcG0yAtsuKcmPWBjxNCY',
      quote: 'Mechanical Engineer turned Front-End Engineer',
    },
  ],
  phone: '+923249496639',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fahadachaudhry',
    },
    {
      name: 'Behance',
      url: 'http://www.behance.com/fahadachaudhry',
    },
    {
      name: 'Github',
      url: 'http://www.github.com/fahadachaudhry',
    },
    {
      name: 'Instagram',
      url: 'http://www.instagram.com/fahadachaudhry',
    },
    {
      name: 'Facebook',
      url: 'http://www.facebook.com/fahadachaudhry',
    },
  ],
  email: 'Innocentkashif387@gmail.com',
  bio: ['I\'m a Lahore-based software engineer who specializes in building wesite front end in react. Currently, I\'m a front end developer at Euphoria XR.'],
  skills: {
    languages: ['Javascript (ES6)', 'TypeScript', 'HTML', 'CSS/Sass', 'Bootstrap'],
    frameworks: ['React', '.NET'],
    tools: ['Git', 'Stack Overflow', 'Docker'],
    design: ['Adobe Photoshop(Basic)'],
    devtools: ['VSCode', 'Visual Studio', 'Dev'],
  },
  experiences: [
    {
      shortName: 'Euphoria XR',
      companyName: 'Conrad Labs',
      endDate: 'Present',
      position: 'Software Engineer',
      startDate: 'Dec 2020',
      summary: 'Euphoria XR is a company that helps startups breathe a technological life into their idea!\n\nMy responsibilities include:\n1. Solve the given task. \n2. Actively indulde in Front end Development.',
      website: 'https://www.linkedin.com/company/conrad-labs/',
    },
  ],
  certifications: [{
    name: 'Front End Libraries',
    issuedBy: 'freeCodeCamp',
    verificationURL: 'https://www.freecodecamp.org/certification/fahadachaudhry/front-end-libraries',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuedBy: 'freeCodeCamp',
    verificationURL: 'https://www.freecodecamp.org/certification/fahadachaudhry/javascript-algorithms-and-data-structures',
  },
  {
    name: 'Advanced ReactJS',
    issuedBy: 'CodeCademy',
    verificationURL: 'https://www.codecademy.com/profiles/fahadachaudhry',
  },
  {
    name: 'Introduction to ReactJS',
    issuedBy: 'CodeCademy',
    verificationURL: 'https://www.codecademy.com/profiles/fahadachaudhry',
  },
  ],
  projects: [
    {
      name: 'EasyFolio | ReactJS based Portfolio',
      imageUrl: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      companyName: '',
      url: 'https://github.com/fahadachaudhry/portfolio',
      description: [
        'I always found myself switching portfolios, tried tons of templates but nothing suited my style. Some lack theming options and others were just too hard to keep updated.',
        'So as a frontend developer, why not solve it the way that fits better with what I am good at?',
      ],
      tags: ['ReactJS', 'TypeScript', 'SCSS'],
    },
    {
      name: 'Red Velvet Cupcake | VSCode Theme',
      imageUrl: 'https://images.unsplash.com/photo-1524135329990-07660cd5bf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80',
      companyName: '',
      url: 'https://marketplace.visualstudio.com/items?itemName=fahadachaudhry.velvet-cupcake-theme',
      description: ['Red Velvet Cupcake is a playful VSCode theme. Currently available on Microsoft VSCode Marketplace.'],
      tags: ['Yeoman', 'CSS', 'JSON'],
    },
    {
      name: 'Valary | VSCode Theme',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      companyName: '',
      url: 'https://marketplace.visualstudio.com/items?itemName=fahadachaudhry.valary',
      description: ['Valary is an immersive Dark Theme for VSCode. Currently available on Microsoft VSCode Marketplace.'],
      tags: ['Yeoman', 'CSS', 'JSON'],
    },
    {
      name: 'Innovation Projects',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      companyName: 'CureMD Research and Development',
      url: '',
      description: ['I have proposed and successfully developed the following projects as personal innovative suggestions at CureMD Research & Development:',
        '1. Revamping the referrals module by User export interface reusability/flexibility and limiting the content flow on screen for the user to avoid overcrowdedness of information.',
        '2. Users prompt reduction to enhance interruption-free user experience in the Superbill module.',
        '3. Development of a dashboard to resolve client requests(L3s) at a decreased SLA.',
      ],
      tags: ['.NET', 'JS', 'CSS', 'HTML'],
    },
    {
      name: 'Billing Rule Engine - Expert System',
      imageUrl: 'https://images.unsplash.com/photo-1578496479763-c21c718af028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      companyName: 'CureMD Research and Development',
      url: '',
      description: ['In this project, we enabled the doctors to identify and rectify insurance-claim rejections at the appointment stage which is far earlier than the billing stage, using a C# based web service. This step reduced the insurance-claims rejections drastically and improved the overall efficiency of the billing process.'],
      tags: ['.NET', 'JS', 'CSS', 'HTML'],
    },
  ],
  goodByeText: 'Although I\'m not actively looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
};

const getProfileData = () => profile;

export default getProfileData;
