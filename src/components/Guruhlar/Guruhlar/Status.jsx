/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import StatusModal from "./StatusModal";
import { Icon } from "./style";
import useFetch from "../../../hooks/useFetch";

export const Status = ({ value }) => {
  switch (value) {
    case "keldi":
      return <Icon.Keldi />;
    case "sababli":
      return <Icon.Sababli />;
    case "sababsiz":
      return <Icon.Sababsiz />;
    case "birinchi":
      return <Icon.Birinchi />;
    default:
      return "-";
  }
};

const StatusWrapper = ({ value, title: tl, path, reload, id }) => {
  const [open, setOpen] = useState(false);
  const [align, setAlign] = useState({ x: 0, y: 0 });
  const request = useFetch();

  // useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     e.stopImmediatePropagation();
  //     setOpen(false);
  //   });
  // }, []);

  const onChanngeStatus = async (title) => {
    let res = await request(`/tabs/${path}/id/*${id}*`, {
      method: "PATCH",
      body: { [tl]: title },
    });

    if (res) {
      reload();
      setOpen(false);
    }
  };

  return (
    <div
      onClick={(e) => {
        if (!open) setAlign({ x: e.pageX, y: e.pageY });
        setOpen(true);
      }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StatusModal open={open} align={align} onClick={onChanngeStatus} />
      <Status value={value} />
    </div>
  );
};

export default StatusWrapper;
