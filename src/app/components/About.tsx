import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const currentRef = useRef(1);
  const heightRef = useRef<number>(0);
  const numberDivsRef = useRef<number>(0);
  const firstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = currentRef.current;
      const height = heightRef.current;
      const numberDivs = numberDivsRef.current;
      const first = firstRef.current;

      const number = current * -height;
      if (first) {
        first.style.marginTop = `${number}px`;
      }

      if (current === numberDivs) {
        if (first) {
          first.style.marginTop = '0px';
        }
        currentRef.current = 1;
      } else {
        currentRef.current++;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const height = firstRef.current?.clientHeight;
    if (height) {
      heightRef.current = height;
    }
    const numberDivs = firstRef.current?.parentElement?.childElementCount;
    if (numberDivs) {
      numberDivsRef.current = numberDivs;
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="roles">
        <div ref={firstRef}>Victor Valverde</div>
        <div>About Me</div>
        <div>Web Developer</div>
        <div>Java Specialist</div>
        <div>Back-End</div>
        <div>Freelance</div>
      </div>
    </div>
  );
};

export default About;
