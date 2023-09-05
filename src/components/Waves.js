import React from 'react'

const Waves = () => {
    return (
        <div class="waves-container">
            <svg class="waves animated" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
                <defs>
                    <path id="wave"
                        d="M-160 44c30 0 
                        58-18 88-18s
                        58 18 88 18 
                        58-18 88-18 
                        58 18 88 18
                        v44h-352z" />
                </defs>
                <g class="wave-set">
                    <g class="wave-1-container">
                        <use xlinkHref="#wave" x="50" y="0" class="wave-1" />
                    </g>
                    <g class="wave-2-container">
                        <use xlinkHref="#wave" x="50" y="4" class="wave-2" />
                    </g>
                    
                </g>
            </svg>
        </div>
    )
}

export default Waves