import { PersonCard } from '../components/PersonCard'
import { friendsData } from '../data'
import { widthConstraintDecorator, widthConstraintArgTypes, widthConstraintArgs } from './widthConstraint'

export default {
    component: PersonCard,
    title: 'atoms/PersonCard',
    decorators : [widthConstraintDecorator],
    args: {
        ...widthConstraintArgs,
        person: 'Person 1'
    },
    argTypes: {
        ...widthConstraintArgTypes,
        person: {
            control: {
                type: 'select'
            },
            options: ['Person 1', 'Person 2', 'Person 3'],
            mapping: {
                'Person 1': friendsData[0],
                'Person 2': friendsData[1],
                'Person 3': friendsData[2],
            }
        },
    }
}

const Template = args => { return (<PersonCard {...args} />) }

export const WithoutAction = Template.bind({});

export const WithAction = Template.bind({});
WithoutAction.storyName = 'You can add actions to the story';
WithAction.args = {
    actionName: 'Click me',
    onAction: (() => { }),
}


export const NoProfilePicture = Template.bind({});
NoProfilePicture.args = {
    person: { ...friendsData[0], profilePicUrl: '' },
}