import PropTypes from 'prop-types'
import { PersonCard } from './PersonCard'
import styles from './PeopleList.module.css'

const PeopleList = ({ people, onClickPerson = () => { } }) => {
    return (
        <div className={styles.peopleList}>
            {people.map(person => (
                <div key={person.id} className={styles.peopleListItem}>
                    <PersonCard
                        person={person}
                        onCardClicked={onClickPerson}
                    />
                </div>
            ))}
        </div>
    )
}

PeopleList.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            profilePicUrl: PropTypes.string,
            age: PropTypes.number
        })
    ).isRequired,
    onClickPerson: PropTypes.func
}

export { PeopleList }