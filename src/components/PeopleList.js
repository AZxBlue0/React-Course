import PropTypes from 'prop-types'
import { PersonCard } from './PersonCard'
import styles from './PeopleList.module.css'

const PeopleList = ({
    people,
    onClickPerson = () => { },
    onPersonAction = () => { },
    actionName
}) => {
    return (
        <div className={styles.peopleList}>
            {people.map(person => (
                <div key={person.id} className={styles.peopleListItem}>
                    <PersonCard
                        person={person}
                        onCardClicked={onClickPerson}
                        onAction={onPersonAction}
                        actionName={actionName}
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