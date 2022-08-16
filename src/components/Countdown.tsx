import { useEffect, useState } from "react";
export const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(Date.UTC(2022, 7, 26, 13, 0, 0));

    const updateTime = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        // setHackathonStarted(true);
      }
    };

    const interval = setInterval(updateTime, 1000);
    // run an update on first load
    updateTime();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <CountdownCard title="days" value={days} />
      <CountdownCard title="hours" value={hours} />
      <CountdownCard title="mins" value={minutes} />
      <CountdownCard title="secs" value={seconds} />
    </div>
  );
};

const CountdownCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid  place-items-center">
        <h1 className="font-krona text-[1.7rem]">{value.toString()}</h1>
      </div>
      <span className="text-[1rem] font-medium">{title}</span>
    </div>
  );
};
