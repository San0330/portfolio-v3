import type { NextPage } from 'next'
import Head from 'next/head'
import AppComponent from '../components/AppComponent'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Santosh Neupane</title>
                <meta name="description" content="Portfolio site of fullstack developer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full relative overflow-hidden">
                <div className="container" style={{ maxWidth: '1170px' }}>
                    <AppComponent />
                </div>
            </main>

        </div>
    )
}

export default Home
