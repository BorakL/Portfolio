const IntroAnimation = ({delay,duration})=>{
    return(
        <div className="introWrapper">
            <div 
                className="logo"
                style={{
                    "animationDuration":duration,
                    "animationDelay":delay
                }}
            > 
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                LB
            </div>
        </div>
    )
}

export default IntroAnimation;