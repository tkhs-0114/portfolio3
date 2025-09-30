import { Manager } from "./manager";
import { Window } from "../../window";

interface ManagerStoryArgs {
  approveActivation: boolean;
}

export default {
  title: "Components/Window/Manager",
  component: Manager,
  argTypes: {
    approveActivation: {
      control: "boolean",
      description: "Whether to approve activation of the manager",
      defaultValue: true,
    },
  },
};

export const Default = (args: ManagerStoryArgs) => {
  return (
    <div className="w-[600px] h-[500px]">
      <Manager approveActivation={args.approveActivation}>
        <Window>Window 1</Window>
        <Manager>
          <Manager>
            <Manager>
              <Window>Window 4</Window>
            </Manager>
            <Window>Window 3</Window>
          </Manager>
          <Window>Window 2</Window>
        </Manager>
      </Manager>
    </div>
  );
};

Default.args = {
  approveActivation: true,
};
