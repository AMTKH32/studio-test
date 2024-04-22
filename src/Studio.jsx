import React, { useEffect, useRef, useState } from 'react';
import './Std.css'; // Import CSS file for styling

function VerticalLinesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const lineCount = 100; // Number of vertical lines
    const lineSpacing = 15;
    const lineHeight = 700; // Height of lines
    const marginTop = 50; // Margin from the top

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw vertical lines
    for (let i = 0; i < lineCount; i++) {
      ctx.beginPath();
      ctx.moveTo(i * lineSpacing, (height - lineHeight) / 2 + marginTop);
      ctx.lineTo(i * lineSpacing, (height + lineHeight) / 2 + marginTop);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1; // Adjust the line width as needed
      ctx.stroke();
    }
  }, []);

  return (
    <canvas ref={canvasRef} width={700} height={1000} style={{ marginTop: '-179px' }} />
  );
}

function CircleAnimation() {
  return (
    <div className="circle-container">
      <div className="fill-circle"></div>
      <div className="outline-circle"></div>
    </div>
  );
}

function App_studio() {
  const [animationToggle, setAnimationToggle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationToggle(prevState => !prevState);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-black w-full h-full flex justify-center items-center relative'>
      <VerticalLinesCanvas />
      <div className="animation-container">
        {animationToggle ? <CircleAnimation /> : null}
      </div>
    </div>
  );
}

export default App_studio;
