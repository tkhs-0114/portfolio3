import { Skill } from "./skill";

interface SkillStoryArgs {
  skill: string;
  percent: number;
}

export default {
  title: "Components/Skill",
  component: Skill,
  argTypes: {
    skill: {
      control: "text",
      description: "Skill name",
      defaultValue: "javascript",
    },
    percent: {
      control: "number",
      description: "Skill proficiency percentage",
      defaultValue: 80,
    },
  },
};

export const Default = (args: SkillStoryArgs) => (
  <Skill skill={args.skill} percent={args.percent} />
);

Default.args = {
  skill: "javascript",
  percent: 80,
};
