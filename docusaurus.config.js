//including katex and shit 
const math = require('remark-math');
const katex = require('rehype-katex');

//defining some constants which will be used throughout this configuration file
const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohitdhill/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/s4dr0t1",
  },
  email: {
    label: "Email",
    href: "mailto:contact@rohitdhill.me",
  },
  twitter: {
    label: "Twitter",
    href: "https://twitter.com/s4dr0t1",
  },
  keybase: {
    label: "Keybase",
    href: "https://keybase.io/s4dr0t1",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "My Infosec Ramblings",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  about: {
    label: "About",
    to: "/#about",
  },
};


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  //website metadata
  title: 'Rohit Dhill',
  tagline: 'A CS Undergrad with penchant for Offensive Security\n Sophomore at MNIT Jaipur',
  favicon: '/img/logo.png',

  //deployment configuration
  url: 'https://rohitdhill.me',
  baseUrl: '/',
  projectName: 's4dr0t1.github.io', // github repo name
  organizationName: 's4dr0t1', // github username
  trailingSlash: false,

  //theme configuration
  themeConfig: {
    hideableSidebar: true, //for documentation
    prism: {
      //add additional languages here if need be, has prism as its dependency
      additionalLanguages: ['powershell'],
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    //defining what should docusauras's behavour be, in case anything bad happens
    noIndex: false, //enable or disable website crawling
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    //the navbar of the website
    navbar: {
      title: 's4dr0t1',
      hideOnScroll: true,
      logo: {
        alt: 'aHR0cHM6Ly94a2NkLmNvbS8yMTc2Lwo=',
        href: '/',
        src: 'img/logo.png',
        target: "_self",
      },
      items: [
        { to: 'blog/', label: 'Blog', position: 'left' },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'My Infosec Ramblings',
          position: 'left',
        },
        { to: "projects/", label: "Projects", position: "right" },
        { to: '/#about', label: 'About', position: 'right' },
      ],
    },

    //the footer of the website
    footer: {
      style: 'light',
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.twitter,
            internetProfiles.keybase,
            internetProfiles.email,
          ],
        },
        {
          title: 'Discover',
          items: [
            internetProfiles.about,
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
          ],
        },
      ],
      copyright: `Last updated on ${new Date().toDateString()} | Inspired by kayo-folio`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          disableVersioning: false,
          editCurrentVersion: false,
          sidebarCollapsed: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },

        blog: {
          feedOptions: {
            type: 'all',
            language: 'en',
            description: 'RSS feed for my blog',
            copyright: `Copyright © ${new Date().getFullYear()} Rohit Dhill.`,
          },
          blogTitle: 'Blog',
          blogDescription: 'A blog on Cyber Security, and tech in general, maintained by Rohit Dhill',
          postsPerPage: 5,
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 5,
          showReadingTime: true,

          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],

  // scripts: [    
  //   // String format.    
  //   'https://docusaurus.io/script.js',
  //   // Object format.
  //   { 
  //     src:
  //     'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  //     async: true,    },  
  //   ],

  baseUrlIssueBanner: true,
};

