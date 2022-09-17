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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
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
