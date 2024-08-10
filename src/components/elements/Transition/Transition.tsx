'use client';
import { AnimatePresence, motion, Spring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Transition({ children }: { children: React.ReactNode }) {
  const transitionSpringPhysics: Spring = {
    type: 'spring',
    mass: 0.2,
    stiffness: 80,
    damping: 10,
    duration: 0.3,
  };

  const transitionColor = 'var(--secondary-color)';

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={'/'}>
        <motion.div
          style={{
            backgroundColor: transitionColor,
            position: 'fixed',
            width: '100vw',
            zIndex: 1000,
            bottom: 0,
            left: !isMobile ? 250 : 0, // Ensure the starting position is from the left
          }}
          transition={transitionSpringPhysics}
          animate={{ height: '0vh' }}
          exit={{ height: '100vh' }}
        />

        <motion.div
          style={{
            backgroundColor: transitionColor,
            position: 'fixed',
            width: '100vw',
            zIndex: 1000,
            top: 0,
            left: !isMobile ? 250 : 0, // Ensure the starting position is from the left
          }}
          transition={transitionSpringPhysics}
          initial={{ height: '100vh' }}
          animate={{ height: '0vh', transition: { delay: 0.2 } }}
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
