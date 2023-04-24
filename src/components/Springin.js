import { useSpring, animation } from 'react-spring'

function Springin({ childern }) {
const animatedProps = useSpring({
    config: { mass:1, tension: 150, friction: 10 }
});

    return(
        <animation.div style={{...animatedProps}}>
            {childern}
        </animation.div>
    )
}

export default Springin