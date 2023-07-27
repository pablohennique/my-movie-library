import './globals.css'
// import './movie-list.css'
import styles from './layout.module.css'
import { Inter } from 'next/font/google'
import { NavMenu } from '../components/nav-menu'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} ${styles.rootLayout}`}>
        <header>
          <NavMenu />
        </header>

        <main>{children}</main>

        <footer>
          <p>
            Powered by React+Next.js
          </p>
        </footer>

      </body>
    </html>
  )
}
