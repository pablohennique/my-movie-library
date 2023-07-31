import { PeopleList } from '../../components/people-list'
import { fetchPopularPeople } from '@/lib/tmdb'

export const metadata = {
  title: 'People',
  description: 'Some people who worked in the movies',
}

export default async function PeoplePage() {
  const peopleObject = await fetchPopularPeople()
  const people = peopleObject.content
  const success = peopleObject.success
  const error = peopleObject.error

  // const people = [
  //   { id: 0, name: 'Gabriel Guevara' },
  //   { id: 1, name: 'Gary Coleman' },
  //   { id: 2, name: 'Angeli Khang' },
  //   { id: 3, name: 'Katherine LaNasa' },
  //   { id: 4, name: 'Rebecca Ferguson' },
  // ]

  return (
    <>
      <h1>People Involved</h1>
      <h2>Here are the names of some people who worked in the movies:</h2>
      { success ? (
        <PeopleList people={people} />
        ) : (
          <p>{`Error: ${error}`}</p>
        )
      }
    </>
  )
}
