export const widthConstraintDecorator = (Story, { args, argTypes }) => {
    return (
        <div style={{ width: args.containerWidth + 'px' }}>
            <Story />
        </div>
    )
}

export const widthConstraintArgTypes =(minValue, maxValue)=> ({
    containerWidth: {
        control: {
            type: 'range',
            min: minValue,
            max: maxValue,
            step: 100,
        }
    }
})


export const widthConstraintArgs = (startingWidth) => ({
    containerWidth: startingWidth,
})
