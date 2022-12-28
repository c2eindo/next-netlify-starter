import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Habitat Scholarship!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Give Scholarship Habitat to Our Community First!" />
        <p className="description">
          Before you access <code>our tool</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
