import './globals.css'
// import './movie-list.css'
import styles from './layout.module.css'
import { Inter } from 'next/font/google'
import { Libre_Baskerville } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Source_Sans_3 } from 'next/font/google'
import { BurgerMenu } from '../components/burger-menu'

const inter = Inter({ subsets: ['latin'] })
const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: '400'})
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400'})
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: '400'})

export const metadata = {
  title: {
    template: '%s · My Movie Library',
    default: 'My Movie Library'
  },
  description: 'An app created with React and Next.js',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${sourceSans.className} ${styles.rootLayout}`}>
          {/* <header>

          </header> */}

          <main>
            <BurgerMenu />
            {children}
          </main>

          <footer>
            <p>
              Powered by React+Next.js
            </p>
          </footer>

        </body>
      </html>
  )
}
