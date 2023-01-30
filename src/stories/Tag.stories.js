import { Tag } from '../components/Tag'

export default {
    component: Tag,
    title: 'atoms/Tag'
}

export const Basic = args => <Tag {...args} />

Basic.args = {
    text: 'hello'
}

export const MultipleTags = args => (
    <>
        {args.strings.map(string => <Tag text={string} />)}
    </>
);

MultipleTags.args = {
    strings: ['Tag1', 'Tagn2', "Tag3"],
}