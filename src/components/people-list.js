import {PeopleListItem} from './people-list-item'
import styles from './people-list.module.css'

export function PeopleList({ people }) {
  return (
    <ul className={styles.peopleList}>
      {people.map((person) =>
        <PeopleListItem key={person.id} person={person} />
        )
      }
    </ul>
  )
}
