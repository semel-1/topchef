import React, { useEffect, useState } from "react";

const SkillBar = ({ skill, level, startAnimation }) => {
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const duration = 3000; // Total animation duration in milliseconds
    const fps = 60; // Target frames per second
    const totalFrames = (duration / 1000) * fps;

    let frame = 0;

    const easeOut = (t) => 1 - Math.pow(1 - t, 10); // Cubic ease-out function

    const interval = setInterval(() => {
      frame++;

      setCurrentLevel(() => {
        const progress = frame / totalFrames; // Normalize progress to [0, 1]
        if (progress >= 1) {
          clearInterval(interval);
          return level; // Ensure we stop at the exact level
        }
        return easeOut(progress) * level; // Apply easing function
      });
    }, 3000 / fps); // Interval delay based on FPS

    return () => clearInterval(interval); // Clean up interval
  }, [level, startAnimation]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-3">
        <span className="text-base font-medium text-gray-100">{skill}</span>
        <span className="text-sm font-medium text-gray-100">
          {Math.round(currentLevel)}%
        </span>
      </div>
      <div className="w-full bg-gray-500 rounded-full h-1">
        <div
          className="bg-yellow-500 h-1 rounded-full transition-all ease-out"
          style={{ width: `${currentLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
