import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>edu notes</title>

        <meta
          name="description"
          content="notes and ideas on topics, by eduardo gonzalez"
        />
        <meta
          name="og:description"
          content="notes and ideas on topics, by eduardo gonzalez"
        />
        <meta name="og:title" content="edu notes" />
        <meta name="og:url" content="https://edunotes.vercel.app" />
        <meta name="apple-mobile-web-app-title" content="edu notes" />
        <meta name="icon" type="image/x-icon" href="./public/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://github.com/EduGonO/notes/blob/master/public/edunotesicon.png"
        />
        <meta name="og:title" content="edu notes" />
        <meta
          name="og:image"
          content="https://github.com/EduGonO/notes/blob/master/public/edunotesicon.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
