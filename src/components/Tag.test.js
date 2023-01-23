import { render, screen } from '@testing-library/react';
import { Tag } from "./Tag";


test('Correctly displays tag, given text prop', () => {
    render(<Tag text="Test tag" />);
    const actual = screen.getByText('Test tag');
    expect(actual).toBeInTheDocument;
});