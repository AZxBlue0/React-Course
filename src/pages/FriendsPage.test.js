import { FriendsPage } from "./Friendspage"
import { fireEvent, screen, within } from '@testing-library/react'
import { renderWithResources, renderInApp } from "../test-utils/renderers"
import { fakePeople } from '../test-utils/fakes';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test('Displays all necessary sections', () => {
    const fakeHistory = createMemoryHistory();
    renderWithResources(
        <Router location={fakeHistory.location} navigator={fakeHistory}>
            <FriendsPage />
        </Router >,
        { friends: fakePeople },
        { favouriteIds: ['1'] },
    );
    const lists = screen.getAllByRole('list');
    expect(lists).toHaveLength(2);
})

test('Displays the favorites in one list, and the non favorites in another', () => {
    const fakeHistory = createMemoryHistory();
    renderWithResources(
        <Router location={fakeHistory.location} navigator={fakeHistory}>
            <FriendsPage />
        </Router >,
        { friends: fakePeople },
        { favouriteIds: ['1'] },
    );

    const favoritesList = screen.getAllByRole('list')[0];
    const favorites = within(favoritesList).getAllByRole('listitem');
    expect(favorites).toHaveLength(1);

    const nonFavoritesList = screen.getAllByRole('list')[1];
    const person1 = within(nonFavoritesList).getByText('Eva Pena');
    const person2 = within(nonFavoritesList).getByText('Phyllis Carpenter');

    expect(person1).toBeInTheDocument();
    expect(person2).toBeInTheDocument();
})

test('After clicking on card, user is redictered to friend detail page', () => {
    const fakeHistory = createMemoryHistory();
    renderWithResources(
        <Router location={fakeHistory.location} navigator={fakeHistory}>
            <FriendsPage />
        </Router >,
        { friends: fakePeople },
        { favouriteIds: ['1'] },
    );

    fireEvent.click(screen.getByText(/eva pena/i));
    expect(fakeHistory.location.pathname).toEqual('/friends/2');
})

test('Moves non-favorites to favorites, when their bautton is clicked', () => {
    const fakeHistory = createMemoryHistory();
    renderInApp(
        <Router location={fakeHistory.location} navigator={fakeHistory}>
            <FriendsPage />
        </Router >
    );
    const nonFavoritesList = screen.getAllByRole('list')[1];
    const person1ListItem = within(nonFavoritesList).getAllByRole('listitem')[0];
    fireEvent.click(within(person1ListItem).getByRole('button'));

    const favoritesList = screen.getAllByRole('list')[0];
    expect(within(favoritesList).getByText('Aubrey Long')).toBeInTheDocument();
})