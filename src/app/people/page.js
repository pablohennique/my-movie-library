import { PeopleList } from '../../components/people-list'

export const metadata = {
  title: 'People',
  description: 'Some people who worked in the movies',
}

export default function PeoplePage() {
  const people = [
    { id: 0, name: 'Gabriel Guevara' },
    { id: 1, name: 'Gary Coleman' },
    { id: 2, name: 'Angeli Khang' },
    { id: 3, name: 'Katherine LaNasa' },
    { id: 4, name: 'Rebecca Ferguson' },
  ]

  return (
    <>
      <h1>People Involved</h1>
      <h2>Here are the names of some people who worked in the movies:</h2>
      <PeopleList people={people} />
    </>
  )
}
