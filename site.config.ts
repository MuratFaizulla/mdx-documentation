// // site.config.ts

// export interface SiteConfig {
//   name: string;
//   shortName: string;
//   description: string;
//   author: string;
//   baseUrl: string;
//   links: {
//     github: {
//       username: string;
//       url: string;
//     };
//     discord?: string;
//     github_org: string;
//   };
// }
// export const siteConfig: SiteConfig = {
//   name: 'Nazarbayev Intellectual School',
//   shortName: 'NIS Docs',
//   description:
//     'A centralized documentation hub providing students and staff with tutorials, guidelines, digital resources, and technical instructions for effective learning and digital literacy.',
//   author: 'IT Department — NIS',
//   baseUrl: 'https://docs.nis.kz',
//   links: {
//     github: {
//       username: 'nis-tech',
//       url: 'https://github.com/nis-tech',
//     },
//     github_org: 'https://github.com/nis-tech',
//   },
// };
// export interface SiteConfig {
//   name: string;
//   shortName: string;
//   description: string;
//   author: string;
//   baseUrl: string;
//   links?: {
//     website?: string;
//     helpdesk?: string;
//     telegram?: string;
//   };
// }

// export const siteConfig: SiteConfig = {
//   name: 'Nazarbayev Intellectual School',
//   shortName: 'NIS Docs',
//   description:
//     'Documentation portal with guidelines, digital policies, and project resources for NIS students and staff.',
//   author: 'IT Department — NIS',
//   baseUrl: 'https://docs.nis.kz',
//   links: {
//     website: 'https://nis.edu.kz',
//     telegram: 'https://t.me/nis_official',
//   },
// };




export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  author: string;
  baseUrl: string;
  logo?: string; // ← добавили
  links?: {
    website?: string;
    helpdesk?: string;
    telegram?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Nazarbayev Intellectual School',
  shortName: 'NIS',
  description:
    'Documentation portal with guidelines, digital policies, and project resources for NIS students and staff.',
  author: 'IT Department — NIS',
  baseUrl: 'localhost:3000',

  // 💡 Логотип (добавь файл в /public/images/)
  logo: '/images/logo_zhapirak.png',

 
};
