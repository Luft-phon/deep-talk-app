import BlurText from "../Reactbits/BlurText/BlurText";

function BlurSurfaceText({text}) {

    return (
            <BlurText
            text={text}
            delay={150}
            animateBy="words"
            direction="top"
            className="blurText"
        />        
    )
}

export default BlurSurfaceText