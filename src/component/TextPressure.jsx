import TextPressure from '../Reactbits/TextPressure/TextPressure';

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used

function SurfaceText() {
    return (
        <div style={{ position: 'relative', height: '100px' }} className='sufaceText'>
            <TextPressure
                text="Breaking the Ice"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
            />
        </div>
    )
}

export default SurfaceText
