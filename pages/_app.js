import NextApp from 'next/app'
import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import Header from "../components/Header";
import SearchBar from '../components/SearchBar'
import { ThemeStore } from '../context/ThemeStore';
import Theme from '../Theme';

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
            <Head><title>Best Films</title></Head>
            <Header />

            <SearchBar />
            <Component {...pageProps} />
            <Footer />
          </Theme>
        </ThemeStore>
      </>
    )
  }
}
