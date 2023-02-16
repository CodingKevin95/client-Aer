import { useSpring, animation } from 'react-spring'

function Springin({ childern }) {
const animatedProps = useSpring({
    // from: { marginTop: -200, opacity:0 },
    // opacity: 1,
    config: { mass:1, tension: 150, friction: 10 }
});

    return(
        <animation.div style={{...animatedProps}}>
            {childern}
        </animation.div>
    )
}

export default Springin