import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let vantaEffectInstance;

    const initializeVanta = () => {
      if (!vantaEffect && vantaRef.current) {
        vantaEffectInstance = BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundColor: 0x1a1a1a,
          color1: 0xff9900,
          color2: 0x00ffcc,
        });
        setVantaEffect(vantaEffectInstance);
      }
    };

    // Delay to ensure ref is attached
    setTimeout(initializeVanta, 100);

    return () => {
      if (vantaEffectInstance) vantaEffectInstance.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />
  );
};

export default VantaBackground;
