import { useEffect, useRef } from 'react';
import anime from 'animejs';

const GRID_WIDTH = 35;
const GRID_HEIGHT = 25;

const DotGrid = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    // Start the animation when component mounts
    startAnimation();

    // Cleanup function to stop the animation when component unmounts
    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  const startAnimation = () => {
    // Start the animation
    animationRef.current = anime({
      targets: '.dot-point',
      scale: [
        { value: 1.2, easing: 'easeOutSine', duration: 400 },
        { value: 1, easing: 'easeInOutQuad', duration: 800 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 400 },
        { value: 0, easing: 'easeInOutQuad', duration: 800 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 400 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 800 },
      ],
      loop: true, // Loop the animation infinitely
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: 'center',
      }),
      direction: 'alternate', // Alternate the direction of animation
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className='rounded-full transition-colors hover:bg-slate-600'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point size-[.4rem] rounded-full bg-gradient-to-b from-[#c471f5] to-[#fa71cd] opacity-50'
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className='grid gap-3 w-fit'
    >
      {dots}
    </div>
  );
};

const WaterDropGrid = () => {
  return (
    <div>
      <DotGrid />
    </div>
  );
};

export default WaterDropGrid;
