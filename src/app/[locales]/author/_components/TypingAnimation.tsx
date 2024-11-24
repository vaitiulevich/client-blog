'use client';
import React, { useEffect, useState } from 'react';

const TypingAnimation = ({
  text,
  speed = 100,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <>{displayedText}</>;
};

export default TypingAnimation;
