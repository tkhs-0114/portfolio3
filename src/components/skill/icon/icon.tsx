interface IconProps {
  src: string;
  className?: string;
}

export const Icon = ({ src, className }: IconProps) => {
  return (
    <img
      className={`aspect-square ${className}`}
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${src}/${src}-original.svg`}
    />
  );
};
