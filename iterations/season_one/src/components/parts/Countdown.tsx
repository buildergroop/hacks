interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export const Countdown: React.FC<CountdownProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="flex items-center gap-2">
      <CountdownCard title="days" value={days} />
      <CountdownCard title="hours" value={hours} />
      <CountdownCard title="mins" value={minutes} />
      <CountdownCard title="secs" value={seconds} />
    </div>
  );
};

const CountdownCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-dark-main bg-opacity-[35%] rounded-lg p-1 w-[4rem] grid place-items-center">
        <h1 className="text-[1.9rem] font-semibold">{value.toString()}</h1>
      </div>
      <span className="text-[1rem] font-medium">{title}</span>
    </div>
  );
};
