import { PeopleList } from './PeopleList';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fakePeople } from '../test-utils/fakes';

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