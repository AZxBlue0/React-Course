import PropTypes from 'prop-types'
import { PersonCard } from './PersonCard'
import styles from './PeopleList.module.css'
import { NewFriendCard } from './NewFriendCard'
import { useNavigate } from 'react-router-dom'

const PeopleList = ({
    people,
    onClickPerson = () => { },
    onPersonAction = () => { },
    actionName,
    allowAdditions = false
}) => {

    const navigate = useNavigate();

    return (
        <div className={styles.peopleList} role="list">
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
            {allowAdditions &&
                <div className={styles.peopleListItem}>
                    <NewFriendCard onClick={() => navigate('new-friend')} />
                </div>
            }
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