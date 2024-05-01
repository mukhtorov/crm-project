import { useEffect, useState } from "react";
import { Section, Timer } from "./style";

export const Time = () => {
  const [date, setDate] = useState({ hour: "", minute: "", status: "PM" });

  const getSeconds = () => {
    setInterval(() => {
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();

      if (hour > 12) {
        hour = hour % 12;
        setDate((d) => {
          return { ...d, status: "PM" };
        });
      } else
        setDate((d) => {
          return { ...d, status: "AM" };
        });

      if (hour < 10) hour = "0" + hour;

      if (minute < 10) minute = "0" + minute;

      setDate((d) => {
        return { ...d, hour, minute };
      });
    }, 1000);
  };

  useEffect(() => {
    getSeconds();
  }, []);

  return (
    <Section>
      <Timer>
        {date.hour}:{date.minute}
      </Timer>
      <Timer status="true">{date.status}</Timer>
    </Section>
  );
};

export default Time;
