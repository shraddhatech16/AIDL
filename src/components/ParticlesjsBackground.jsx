import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



const PariclesBackground =()=>{
  const particlesInit = async (main) => {
    console.log(main);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
};

const particlesLoaded = (container) => {
    console.log(container);
};

  

  return (
    <Particles 
    id="tsparticles"
    init={particlesInit}
    Loaded={particlesLoaded}
    options={{
        fullScreen:{
            enable:true,
            zIndex:-1
        },
      background: {
          color: {
              value: "#01060f",
          },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: "push",
              },
              onHover: {
                  enable: true,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.1,
              },
          },
      },
      particles: {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 3,
          },
          collisions: {
              enable: true,
          },
          move: {
              directions: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 50,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
            }}
    />
    );
}

export default PariclesBackground;
