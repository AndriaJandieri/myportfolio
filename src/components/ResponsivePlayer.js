import React from 'react'
import ReactPlayer from 'react-player'
import "./ResponsivePlayer.css"

const ResponsivePlayer = () => {

    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'                
                url="https://youtu.be/T2SVKjciX08"
                width='100%'
                height='100%'
                controls={true}
                playing={true}
            />
        </div>
    )
}

export default ResponsivePlayer