import { Icon } from "../icon/icon";

interface SkillProps {
  skill: string;
  percent: number;
}

export const Skill = ({ skill, percent }: SkillProps) => {
  return (
    <div className="inline-flex flex-col items-center mx-2">
      <div
        className="aspect-square w-8 md:w-16 flex items-center justify-center rounded-full bg-blue-300 relative"
        style={{
          background: `conic-gradient(#2563eb ${percent}%, #93c5fd ${percent}% 100%)`,
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
