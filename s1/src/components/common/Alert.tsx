interface AlertPropTypes {
  message: string;
  show: boolean;
}

export const Alert: React.FC<AlertPropTypes> = ({ message, show }) => {
  return (
    <div
      className={`alert absolute z-10 text-sm flex items-center justify-center rounded p-2 w-1/4 h-16 top-8 right-8 shadow-xl bg-light-tertiary bg-opacity-60`}
      style={{
        display: `${show ? "flex" : "none"}`,
      }}
    >
      <p className="font-medium">{message}</p>
    </div>
  );
};
