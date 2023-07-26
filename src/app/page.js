import { NavMenu } from '../components/nav-menu'

export default function HomePage() {
  const appTitle = 'My Movie Library'
  const displayTitle = true
  const uppercaseTitle = false
  const uppercaseTernary = uppercaseTitle ? appTitle.toUpperCase() : appTitle

  return (
      <main>
        <NavMenu />
        <h1>{displayTitle && uppercaseTernary}</h1>
        <h2>The best ever</h2>
      </main>
  )
}
