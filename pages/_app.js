import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import { ThemeStore } from '../context/ThemeStore';
import Theme from '../Theme';
import NavBar from '../components/NavBar'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import GoToTop from '../components/GoToTop';

import * as ga from '../lib/ga'


export default function App({ Component, pageProps }) {
  // remove it here
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)

  }, [])

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

 
   

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
                  url: "https://besftfilms.xyz/",
                  images: [
                    {
                      url: "https://besftfilms.xyz/img/logo_poster.jpg",
                      width: 165,
                      height: 165,
                
                    }
                  ],
                  type: 'website'
                }}
                description="Site de filmes e series online de graça!!!"
                title="Best Films"
              />
           
            <NavBar />
           
            
            <Component {...pageProps} />
            <GoToTop />
            <Footer />
          </Theme>
        </ThemeStore>
      </>
    )
  
}


