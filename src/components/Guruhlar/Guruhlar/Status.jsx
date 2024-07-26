/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import StatusModal from "./StatusModal";
import { Icon } from "./style";

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
      return "value";
  }
};

const StatusWrapper = ({ value }) => {
  const [open, setOpen] = useState(false);
  const [align, setAlign] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpen(false);
    });
  }, []);

  return (
    <div
      onClick={(e) => {
        setAlign({ x: e.pageX, y: e.pageY });
        setOpen(true);
      }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StatusModal open={open} align={align} />
      <Status value={value} />
    </div>
  );
};

export default StatusWrapper;
