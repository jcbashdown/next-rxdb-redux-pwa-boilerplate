import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import styles from '@/styles/Home.module.css'

const StoreProvider = dynamic(() => import('@/app/StoreProvider'), {
    loading: () => {
        return <h1 className={styles.title}>Loading...</h1>
    },
    ssr: false,
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json" />
                <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB" />
            </head>
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <StoreProvider>
                    <div id="root">{children}</div>
                </StoreProvider>
            </body>
        </html>
    )
}
