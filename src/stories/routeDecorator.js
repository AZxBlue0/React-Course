import { MemoryRouter} from "react-router-dom"
export const routeDecorator = Story => (
    <MemoryRouter initialEntries={['/']}>
        <Story/>
    </MemoryRouter>
);