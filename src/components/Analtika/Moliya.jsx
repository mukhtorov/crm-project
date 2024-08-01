/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import useDate, { weeks } from "../../hooks/date";
import Subtitle from "../Generics/Subtitle";
import { Fragment, ArrowIcon, Wrapper, DateCard } from "./moliyaStyle";
import { MoliyaContext } from "../../context/moliya";

export const Moliya = () => {
  const date = useDate();
  const [active, setActive] = useState(new Date().getDate());
  const [weekCount, changeWeek] = useState(0);
  const [today, setToday] = useState({});
  const [state, dispatch] = useContext(MoliyaContext);

  const url = import.meta.env.VITE_BASE_URL;

  const onClickDate = (value) => {
    // if (date.week(weekCount)[0].getDate() === value.getDate())
    //   changeWeek(weekCount - 1);
    // else if (date.week(weekCount)[6]?.getDate() === value?.getDate())
    //   changeWeek(weekCount + 1);
    // setActive(value?.getDate());
    // let date = new Date().getDate();
    let [tdy] = state.filter((val) => val.today == value);
    setToday(tdy);
    setActive(value);
  };

  const onClickForward = () => {
    changeWeek(weekCount + 6);
  };
  const onClickBackward = () => {
    changeWeek(weekCount - 6);
  };

  useEffect(() => {
    // moliya
    fetch(`${url}/tabs/moliya`)
      .then((res) => res.json())
      .then((res) => {
        // res, "res");
        let date = new Date().getDate();
        let [tdy] = res.filter((val) => val.today == date);
        setToday(tdy);

        dispatch({ type: "get", payload: res });
      });
  }, []);

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
        {state.map((value) => {
          let date = new Date(value.day);
          const ac = value.today == active;
          return (
            <DateCard
              active={ac}
              key={value}
              onClick={() => onClickDate(value.today)}
            >
              <Subtitle color={ac && "white"} size={14}>
                {/* <Subtitle color={ac && "white"} size={14}> */}
                {weeks[date.getDay()]?.short}
              </Subtitle>
              <Subtitle color={ac && "white"} size={14}>
                {value.today}
              </Subtitle>
            </DateCard>
          );
        })}
      </Fragment>
      <Subtitle size={14} color="#929FAF">
        {date.date}-{date.month.full}, {date.year}
      </Subtitle>
      <Subtitle size={32} mt={5} mb={24}>
        {today.students}
        <Subtitle size={24} ml={16} color="#52C41A">
          +22%
        </Subtitle>
      </Subtitle>
      <Fragment mb={8}>
        <div>Talabalar</div>
        <Subtitle>{today.students}</Subtitle>
      </Fragment>
      <Fragment>
        <div>Darsliklar sotuvi</div>
        <Subtitle>{today.video}</Subtitle>
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;
