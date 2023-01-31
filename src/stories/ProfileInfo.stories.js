import {ProfileInfo} from '../components/ProfileInfo'
import { Tag } from '../components/Tag'
import { friendsData } from '../data'

export default {
    component: ProfileInfo,
    title: 'molecules/ProfileInfo',
    subcomponents: {
        Tag,
    },
    args:{
        userInformation: friendsData[1],
    }
}

const Template = args => {
    return(
        <ProfileInfo {...args}/>
    )
}

export const NoActions = Template.bind({});
NoActions.args={
    actions: []
}
export const OneAction = Template.bind({});
OneAction.args={
    actions: [{
        name: 'Delete',
        handler: () => { alert('Alert from storybook')},
    }]
}
export const MultipleActions = Template.bind({});
MultipleActions.args={
    actions: [
        {
            name: 'Create',
            handler: () => { alert('Alert from storybook')},
        },
        {
            name: 'Update',
            handler: () => { alert('Alert from storybook')},
        },
        {
            name: 'Delete',
            handler: () => { alert('Alert from storybook')},
        }

    ]
}

export const NoIntrests = Template.bind({});
NoIntrests.args={
    userInformation: {...friendsData[1], intrests:[]}
}