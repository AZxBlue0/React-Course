import { NavBar } from '../components/NavBar';
import { MemoryRouter as Router } from 'react-router-dom';
export default {
    component: NavBar,
    title: 'molecules/NavBar',

}

const Template = args => {
    return (
        <Router initialEntries={['/']}>
            <NavBar {...args} />
        </Router>
    )
}
export const Basic = Template.bind({});
Basic.args = {
    isLoggedIn: true,
}

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    isLoggedIn: false,
}
