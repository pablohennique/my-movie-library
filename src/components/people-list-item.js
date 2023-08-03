import styles from './people-list-item.module.css'

export function PeopleListItem({ person }) {
  return (
    <li className={styles.peopleListItem}>{person.name}</li>
  )
}
