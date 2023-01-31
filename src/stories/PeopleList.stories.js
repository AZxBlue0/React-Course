import { MemoryRouter } from "react-router-dom";
import { NewFriendCard } from "../components/NewFriendCard";
import { PeopleList } from "../components/PeopleList";
import { PersonCard } from "../components/PersonCard";
import { friendsData } from "../data"
import { routeDecorator } from "./routeDecorator";
import { widthConstraintArgs, widthConstraintArgTypes, widthConstraintDecorator } from "./widthConstraint";

export default {
    compnent: PeopleList,
    title: 'molecules/PeopleList',
    decorators: [widthConstraintDecorator, routeDecorator],
    subcomponents: {
        PersonCard,
        NewFriendCard
    },
    argTypes: { ...widthConstraintArgTypes(500, 1200) },
    args: { ...widthConstraintArgs(700) }
}

const Template = args => {
    return (
            <PeopleList {...args} />
    )
}

export const Basic = Template.bind({});

Basic.storyName = 'Width people, an action, and a new button';

Basic.args = {
    people: friendsData,
    actionName: 'ClickMe',
    allowAdditions: true,
    onPersonAction: (() => { }),
}

export const NoAddButton = Template.bind({});
NoAddButton.args = {
    ...Basic.args,
    allowAdditions: false,
    onPersonAction: null
}

export const NoAction = Template.bind({});
NoAction.args = {
    people: friendsData,
}