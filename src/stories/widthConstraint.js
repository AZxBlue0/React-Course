export const widthConstraintDecorator = (Story, { args, argTypes }) => {
    return (
        <div style={{ width: args.containerWidth + 'px' }}>
            <Story />
        </div>
    )
}

export const widthConstraintArgTypes = {
    containerWidth: {
        control: {
            type: 'range',
            min: 400,
            max: 800,
            step: 100,
        }
    }
}


export const widthConstraintArgs = {
    containerWidth: 400,
}