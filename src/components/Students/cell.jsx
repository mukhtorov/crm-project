import { Action } from "./All/style";

export const useCell = (onEdit, onMove) => [
  { id: "name", label: "O'quvchining ismi" },
  {
    id: "status",
    label: "Status",
    render: (res) => {
      let status = res.status === "TRUE";
      return (
        <span style={{ color: status ? "red" : "green", fontWeight: 600 }}>
          {!status ? "Tugallangan" : "Tugallanmagan"}
        </span>
      );
    },
  },
  { id: "phone", label: "Telefon Raqam" },
  {
    id: "payment",
    label: "Balans",
    render: (res) => {
      let active = res?.payment?.includes("-");
      return (
        <span
          style={{
            background: active ? "red" : "green",
            color: "white",
            padding: "4px 10px",
            borderRadius: "8px",
          }}
        >
          {res?.payment}
        </span>
      );
    },
  },
  { id: "parent", label: "Ota onasi" },
  { id: "group", label: "Guruh / Fan" },
  { id: "days", label: "Dars kuni va vaqti" },
  { id: "added_date", label: "Qo’shilgan sana" },
  { id: "admin", label: "Moderator" },
  {
    id: "action",
    label: "",
    render: (res) => (
      <Action>
        <Action.Edit onClick={(e) => onEdit(e, res)} />
        <Action.Move onClick={(e) => onMove && onMove(e, res)} />
      </Action>
    ),
  },
];
