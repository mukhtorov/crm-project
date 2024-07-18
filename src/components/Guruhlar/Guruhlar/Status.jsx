/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import StatusModal from "./StatusModal";
import { Icon } from "./style";

export const Status = ({ value }) => {
  const [open, setOpen] = useState(false);

  //   const onClcikStatus = () => {};

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpen(false);
    });
  }, []);

  switch (value) {
    case "keldi":
      return (
        <div
          onClick={() => setOpen(true)}
          style={{
            // position: "relative",
            display: "flex",
            width: "fit-content",
          }}
        >
          <StatusModal open={open} />
          <Icon.Keldi />
        </div>
      );
    case "sababli":
      return <Icon.Sababli />;
    case "sababsiz":
      return <Icon.Sababsiz />;
    case "birinchi":
      return <Icon.Birinchi />;
    default:
      return value;
  }
};

export default Status;
