import NextApp from 'next/app'
import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import { ThemeStore } from '../context/ThemeStore';
import Theme from '../Theme';
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { DefaultSeo } from 'next-seo'



export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)

  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <ThemeStore>
          <Theme>
            <Head>
            <meta name="google-site-verification" content="JT0m821Vw6hBS0L6QiNOfP4H2HDDmaePFsD6MCfUqdM" />
              <title>Best Films</title>
              </Head>
              <DefaultSeo 
                openGraph={{
                  site_name: "Best Films",
                  url: "https://bestfilms.vercel.app/",
                  // book: {
                  //   tags: [
                  //     "HD",
                  //     "Fullhd",
                  //     "Online",
                  //     "Grates",
                  //     "Dublado",
                  //     "Legendado",
                  //     "Atualizado",
                  //     "Filmes Online Grates",
                  //     "Filmes HD",
                  //     "Best Films",
                  //     "Melhores Filmes",
                  //     "Free Movie"
                  //   ]
                  // },
                  type: 'website'
                 
                  
                }}
                description="Site de filmes e series online de graça!!!"
                title="Os melhores Filmes e Series"
              
              />

            <NavBar />
            
            <Component {...pageProps} />
            <Footer />
          </Theme>
        </ThemeStore>
      </>
    )
  }
}


