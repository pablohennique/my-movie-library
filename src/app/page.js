import Link from 'next/link'

export default function HomePage() {
  const appTitle = 'My Movie Library'
  const displayTitle = true
  const uppercaseTitle = false
  const uppercaseTernary = uppercaseTitle ? appTitle.toUpperCase() : appTitle

  return (
      <>
        <h1>{displayTitle && uppercaseTernary}</h1>
        <h2>The best ever</h2>
        <p>
          Welcome! Have a look at the <Link href="/movies">popular movies</Link>.
        </p>
      </>
  )
}
