import './globals.css'
// import './movie-list.css'
import styles from './layout.module.css'
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { NavMenu } from '../components/nav-menu'
import { ThemeSwitch } from '@/components/theme-switch'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin']})

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
        <body className={`${openSans.className} ${styles.rootLayout}`}>
          <header>
            <NavMenu />
            <ThemeSwitch />
          </header>

          <main>{children}</main>

          <footer>
            <p>
              Powered by React+Next.js | Created by Pablo Hennique
            </p>
          </footer>

        </body>
      </html>
  )
}
