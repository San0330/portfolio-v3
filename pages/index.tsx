import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Santosh Neupane</title>
                <meta name="description" content="Portfolio site of fullstack developer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full relative overflow-hidden">

                {/* Container */}
                <div className="container" style={{ maxWidth: '1170px' }}>
                    <Sidebar />
                    <div className='bg-green-200 h-screen w-full'>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default Home
