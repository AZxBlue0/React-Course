import { PeopleList } from './PeopleList';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';



export const fakePeople = [{
    id: '1',
    name: 'Aubrey Long',
    profilePicUrl: `${process.env.PUBLIC_URL}/fren1.jpg`,
    age: 40,
    bio: 'likes to eat',
    intrests: ['Cats', 'Dogs', 'Food']
}, {
    id: '2',
    name: 'Eva Pena',
    profilePicUrl: `${process.env.PUBLIC_URL}/fren2.jpg`,
    age: 24,
    bio: 'likes to eat',
    intrests: ['Cats', 'Dogs', 'Frogs']
}, {
    id: '3',
    name: 'Phyllis Carpenter',
    profilePicUrl: `${process.env.PUBLIC_URL}/fren3.jpg`,
    age: 31,
    bio: 'likes to paint',
    intrests: ['Landscapes', 'Human', 'Monke']
}]

test('Renders as many list items as people in list', () => {
    render(<BrowserRouter><PeopleList people={fakePeople} /></BrowserRouter>);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
})

test('Does not render an add button if the allowAdditions prop is specified', () => {
    render(<BrowserRouter><PeopleList people={fakePeople} /></BrowserRouter >);
    expect(screen.queryByText('add', { exact: false })).not.toBeInTheDocument();
})

test('Renders an add button if the allowAdditions prop is specified', () => {
    render(<BrowserRouter><PeopleList people={fakePeople} allowAdditions={true} /></BrowserRouter >);
    expect(screen.queryByText('add', { exact: false })).toBeInTheDocument();
})

test('Sends the user to the new page route when the add button is clicked', () => {
    const fakeHistory = createMemoryHistory();
    render(
        <Router location={fakeHistory.location} navigator={fakeHistory}>
            <PeopleList people={fakePeople} allowAdditions={true} />
        </Router >
    );

    fireEvent.click(screen.queryByText('Add', { exact: false }));
    expect(fakeHistory.location.pathname).toEqual("/new-friend");
})