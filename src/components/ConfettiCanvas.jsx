
import React, { useEffect, useRef } from 'react';

const ConfettiCanvas = () => {
  const canvasRef = useRef(null);
  const particles = [];
  const maxConfettis = 150;
  const possibleColors = [
    "DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue",
    "Gold", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"
  ];

  let W = window.innerWidth;
  let H = window.innerHeight;

  const randomFromTo = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);

  function confettiParticle() {
    this.x = Math.random() * W;
    this.y = Math.random() * H - H;
    this.r = randomFromTo(11, 33);
    this.d = Math.random() * maxConfettis + 11;
    this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function (context) {
      context.beginPath();
      context.lineWidth = this.r / 2;
      context.strokeStyle = this.color;
      context.moveTo(this.x + this.tilt + this.r / 3, this.y);
      context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
      context.stroke();
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = W;
    canvas.height = H;

    const resizeCanvas = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < maxConfettis; i++) {
      particles.push(new confettiParticle());
    }

    const draw = () => {
      context.clearRect(0, 0, W, H);
      particles.forEach((particle, i) => {
        particle.draw(context);

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 1 + particle.r / 2) / 3;

        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y > H) {
          particle.x = Math.random() * W;
          particle.y = -30;
          particle.tilt = Math.floor(Math.random() * 10) - 20;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0 }} />;
};

export default ConfettiCanvas;