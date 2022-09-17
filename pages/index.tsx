import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Portfolio site of fullstack developer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto bg-blue-500">
                <h1 className='text-xl text-white'>Hello World</h1>
            </main>

        </div>
    )
}

export default Home
