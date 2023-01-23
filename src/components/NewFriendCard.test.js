import { NewFriendCard } from "./NewFriendCard";
import {render, screen, fireEvent } from '@testing-library/react';

test('When the card is clicked, it calls it onClick prop with no arguments', () => {
    const onClickMock = jest.fn();
    render(<NewFriendCard onClick={onClickMock}/>);
    fireEvent.click(screen.getByRole("listitem"));
    expect(onClickMock).toHaveBeenCalledWith();
})