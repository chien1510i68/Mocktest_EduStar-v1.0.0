// import React, { useState, useEffect } from 'react';
// import { useSprings, animated } from 'react-spring';

// const IntroAnimation = () => {
//   const words = ['Hello', 'World', 'React', 'JavaScript', 'Random', 'Position'];
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const springs = useSprings(
//     words.length,
//     words.map(() => ({
//       opacity: isVisible ? 1 : 0,
//       x: isVisible ? 0 : 100,
//       from: { opacity: 0, x: 100 },
//       reset: true,
//       onRest: () => setIsVisible(false),
//     }))
//   );

//   return (
//     <div>
//       <h1>Intro Animation</h1>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         {springs.map(({ x, opacity }, index) => (
//           opacity > 0 && (
//             <animated.div
//               key={index}
//               style={{
//                 opacity,
//                 transform: x.interpolate((val) => `translate3d(${val}px,0,0)`),
//               }}
//             >
//               {words[index]}
//             </animated.div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// }; 

// export default IntroAnimation;
import React from 'react';

function Intro(props) {
  return (
    <div>
      
    </div>
  );
}

export default Intro;