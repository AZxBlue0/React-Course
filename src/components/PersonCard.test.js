import { fireEvent, render, screen } from '@testing-library/react'
import { PersonCard } from "./PersonCard";
import { fakePerson } from '../test-utils/fakes';


test('PersonCard component displays persons information correctly', () => {
    render(<PersonCard person={fakePerson} />);
    expect(screen.getByText(fakePerson.name)).toBeInTheDocument();
    expect(screen.getByText(fakePerson.age)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', fakePerson.profilePicUrl);
});

test('Displays button for the specified action name prop', () => {
    render(<PersonCard person={fakePerson} actionName="Do something" onAction={() => { }} />);
    expect(screen.getByRole('button')).toHaveTextContent("Do something");
});

test('Calls the specified action function with persons id when action is clicked', () => {
    const mockCallback = jest.fn();
    render(<PersonCard person={fakePerson} actionName="Do something" onAction={mockCallback} />);

    fireEvent.click(screen.getByText('Do something'));
    expect(mockCallback).toHaveBeenCalledWith(fakePerson.id);

})

test('Calls the specified onCardClicked function with the persons id when the container is clicked', () => {
    const mockCallback = jest.fn();
    render(<PersonCard person={fakePerson} actionName="Do something" onCardClicked={mockCallback} />);
    fireEvent.click(screen.getByRole('listitem'));
    expect(mockCallback).toHaveBeenCalledWith(fakePerson.id);
})

test('Doesnt display any button if no onAction callback are specified', () => {
    render(<PersonCard person={fakePerson} actionName="Do something" />);
    expect(screen.queryByText('Do something')).not.toBeInTheDocument();
})


test('Doesnt display any button if no action name are specified', () => {
    render(<PersonCard person={fakePerson} onAction={() => { }} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
})