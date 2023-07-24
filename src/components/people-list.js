import {PeopleListItem} from './people-list-item'

export function PeopleList({ people }) {
  return (
    <ul>
      {people.map((person) =>
        <PeopleListItem key={person.id} person={person} />
        )
      }
    </ul>
  )
}
