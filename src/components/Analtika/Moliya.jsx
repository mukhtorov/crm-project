import { useState } from "react";
import useDate, { weeks } from "../../hooks/date";
import Subtitle from "../Generics/Subtitle";
import { Fragment, ArrowIcon, Wrapper, DateCard } from "./moliyaStyle";

export const Moliya = () => {
  const date = useDate();
  const [active, setActive] = useState(new Date().getDate());
  const [weekCount, changeWeek] = useState(0);

  const onClickDate = (value) => {
    if (date.week(weekCount)[0].getDate() === value.getDate())
      changeWeek(weekCount - 1);
    else if (date.week(weekCount)[6]?.getDate() === value?.getDate())
      changeWeek(weekCount + 1);
    // console.log(date.week());
    setActive(value?.getDate());
  };

  const onClickForward = () => {
    changeWeek(weekCount + 6);
  };
  const onClickBackward = () => {
    changeWeek(weekCount - 6);
  };

  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left onClick={onClickBackward} />
        <Subtitle>
          {date.month?.full} {date.year}
        </Subtitle>
        <ArrowIcon onClick={onClickForward} />
      </Fragment>
      <Fragment mt={16} mb={16}>
        {date.week(weekCount).map((value) => {
          const ac = active == value.getDate();
          return (
            <DateCard
              active={ac}
              key={value}
              onClick={() => onClickDate(value)}
            >
              <Subtitle color={ac && "white"} size={14}>
                {weeks[value.getDay()]?.short}
              </Subtitle>
              <Subtitle color={ac && "white"} size={14}>
                {value.getDate()}
              </Subtitle>
            </DateCard>
          );
        })}
      </Fragment>
      <Subtitle size={14} color="#929FAF">
        {date.date}-{date.month.full}, {date.year}
      </Subtitle>
      <Subtitle size={32} mt={5} mb={24}>
        8 520 000{" "}
        <Subtitle size={24} ml={16} color="#52C41A">
          +22%
        </Subtitle>
      </Subtitle>
      <Fragment mb={8}>
        <div>Talabalar</div>
        <Subtitle>5 760 000</Subtitle>
      </Fragment>
      <Fragment>
        <div>Darsliklar sotuvi</div>
        <Subtitle>2 180 000</Subtitle>
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;
