import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <link rel='icon' type='image/png' href='/favicon-32x32.png' sizes="32x32" />
                <link rel='icon' type='image/png' href='/favicon-16x16.png' sizes="16x16" />

                <link rel='icon' type='image/png' href='/android-chrome-192x192.png' sizes="192x192" />
                <link rel='icon' type='image/png' href='/android-chrome-512x512.png' sizes="512x512" />

                <link rel='icon' type='image/png' href='/apple-touch-icon.png' sizes="180x180" />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
