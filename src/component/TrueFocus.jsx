import TrueFocus from '../Reactbits/TrueFocus/TrueFocus';

function TrueFocusText() {
    return (
        
        <TrueFocus
            sentence="Beneath the Surface"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={1}
            pauseBetweenAnimations={1}
        />
    )
}

export default TrueFocusText
