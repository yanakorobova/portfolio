import {memo, useCallback} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import type {Engine} from 'tsparticles-engine'


export const ParticlesContainer = memo(() => {

    const customInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine)
    }, [])

    const windowWidth = window.innerWidth

    const options = {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: windowWidth < 1000 ? 15 : 35,
                density: {
                    enable: false,
                    value_area: 700,
                },
            },
            color: {
                value: `#27272a`,
            },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.7,
                    sync: false,
                },
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 3,
                    sync: false,
                },
            },
            rotate: {
                value: 0,
                random: true,
                direction: 'clockwise',
                animation: {
                    enable: true,
                    speed: 5,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: windowWidth > 800 ? 170 : 100,
                color: `#2f9f34`,
                opacity: 0.4,
                width: 2,
            },
            move: {
                enable: true,
                speed: 1,
                random: false,
                straight: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: windowWidth > 800 ,
                    mode: ['grab'],
                },
                onclick: {
                    enable: false,
                    mode: 'bubble',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1,
                    },
                },
                repulse: {
                    distance: 200,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
        background: {
            image: '',
            position: '50% 50%',
            repeat: 'no-repeat',
        },
    }

    return <Particles options={options} init={customInit}/>
})