import { useState, useEffect } from "react";
import { Icon } from "../icon/icon";

interface SkillProps {
  skill: string;
  percent: number;
}

export const Skill = ({ skill, percent }: SkillProps) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5秒でアニメーション
    const steps = 60; // 60ステップで滑らかなアニメーション
    const increment = percent / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newPercent = Math.min(increment * currentStep, percent);
      setAnimatedPercent(newPercent);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="inline-flex flex-col items-center mx-2">
      <div
        className="aspect-square w-8 md:w-16 flex items-center justify-center rounded-full bg-blue-300 relative transition-all duration-75"
        style={{
          background: `conic-gradient(#2563eb ${animatedPercent}%, #93c5fd ${animatedPercent}% 100%)`,
        }}
      >
        <Icon
          src={skill}
          className="rounded-full w-7 md:w-13 absolute inset-0 m-auto bg-gray-900"
        />
      </div>
      <p className="text-sm md:text-base">{skill}</p>
    </div>
  );
};
