import { Window } from "./window";

export default {
  title: "Components/Window/Window",
  component: Window,
};

export const Default = () => (
  <Window>
    <h2>Window Content</h2>
    <p>This is some content inside the window component.</p>
  </Window>
);
