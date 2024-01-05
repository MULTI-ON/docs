import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const logo = () => {
  return (
    <span>
      <svg style={{ marginRight: 5, display: "inline-block" }} width="32" height="32" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_26_2)">
        <path fill="currentColor" d="M121.361 258.126C139.88 245.518 158.909 224.66 174.209 198.344C189.509 172.028 198.207 145.158 200 122.823L278.638 143.638C278.631 100.208 243.43 65 200 65C156.569 65 121.361 100.208 121.361 143.638V258.126ZM273.123 267.687C252.941 257.953 225.365 251.905 194.924 251.811C164.482 251.718 136.863 257.622 116.624 267.234L95.3335 188.725C57.7207 210.44 44.8327 258.536 66.5479 296.149C88.2631 333.762 136.359 346.65 173.972 324.934L273.123 267.687ZM304.666 188.725L205.515 131.478C207.178 153.819 215.725 180.726 230.866 207.135C246.008 233.545 264.929 254.511 283.376 267.234H283.383L226.035 324.927C263.648 346.642 311.744 333.754 333.459 296.142C355.167 258.529 342.279 210.44 304.666 188.725Z"/>
        </g>
        <defs>
        <clipPath id="clip0_26_2">
        <rect width="288" height="270.72" fill="white" transform="translate(56 65)"/>
        </clipPath>
        </defs>
      </svg>
      <span>MULTION AI</span>
    </span>
  )}

const config: DocsThemeConfig = {
  head: (
    <>
     <link rel="icon" type="image/png" href=".\icon-1012.png"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="MultiOn Documentation" />
      <meta property="og:description" content="MultiOn Documentation" />
     
    </>
    
    ),

  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – MultiOn'
      }
    }
    else{
      return {
        titleTemplate: 'MultiOn Documentation'
      }
    }
  },
 
  logo: logo,
  project: {
    link: 'https://github.com/MULTI-ON/api',
  },
  chat: {
    link: 'https://discord.gg/Zj5RDdxbee',
  },
  docsRepositoryBase: 'https://github.com/MULTI-ON/docs',
  footer: {
    text: 'MULTION Docs',
  },
}

export default config
