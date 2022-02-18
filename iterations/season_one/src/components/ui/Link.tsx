interface LinkProps {
  title: string;
  isActive?: boolean;
}

export const Link: React.FC<LinkProps> = ({ title, isActive = false }) => {
  return (
    <a
      className={`transition-all text-[1rem] font-semibold tracking-wider hover:opacity-80 cursor-pointer ${
        isActive && ""
      }`}
    >
      {title}
    </a>
  );
};
