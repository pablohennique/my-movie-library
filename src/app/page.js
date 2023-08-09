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

        {/* <img src="https://media.istockphoto.com/id/1305037131/vector/retro-banner-welcome-on-purple-backdrop-light-effect-bright-star-vector-design-banner-game.jpg?s=612x612&w=0&k=20&c=6PjrrvWdU6jSXw3amZqeZr7LGhlWHS-XdRfNx36Y6u8=" alt="welcome image" className="welcomeBanner"></img> */}
      </>
  )
}
