import Check from "../assets/icons/sozlamalar/check.svg?react";
import filial from "../assets/icons/sozlamalar/filiallar.svg?react";
import xabarnoma from "../assets/icons/sozlamalar/sms.svg?react";
import status from "../assets/icons/sozlamalar/call.svg?react";
import sorov from "../assets/icons/sozlamalar/sorov.svg?react";

// Components
// Umumiy
import CheckView from "../view/Sozlamalar/Check";
import FiliallarView from "../view/Sozlamalar/Filiallar";
import XabarnomaView from "../view/Sozlamalar/Xabarnoma";
import SorovnomaView from "../view/Sozlamalar/Sorovnoma";
import CallConfigView from "../view/Sozlamalar/CallConfig";

// Manager
import TolovlarView from "../view/Sozlamalar/Tolovlar";
import DarajalarView from "../view/Sozlamalar/Darajalar";
// Ustoz
import KPIView from "../view/Sozlamalar/KPI";
import OylikView from "../view/Sozlamalar/Oylik";
// Student
import StudentTolovView from "../view/Sozlamalar/StudenTolov";
import KategoryaView from "../view/Sozlamalar/Kategorya";

export const umumiy = [
  { id: 1, icon: Check, element: CheckView, path: "check", title: "Check" },
  {
    id: 2,
    icon: filial,
    element: FiliallarView,
    path: "filiallar",
    title: "Filiallar",
  },
  {
    id: 3,
    icon: xabarnoma,
    element: XabarnomaView,
    path: "xabarnomalar",
    title: "Xabarnomalar",
  },
  {
    id: 4,
    icon: sorov,
    element: SorovnomaView,
    path: "sorovnoma",
    title: "So'rovnoma",
  },
  {
    id: 5,
    icon: status,
    element: CallConfigView,
    path: "status",
    title: "Status ",
  },
];

export const manager = [
  {
    id: 2,
    icon: Check,
    element: TolovlarView,
    path: "tolovlar",
    title: "To'lovlar",
  },
  {
    id: 3,
    icon: filial,
    element: DarajalarView,
    path: "darajalar",
    title: "Darajalar",
  },
];
export const ustoz = [
  {
    id: 2,
    icon: Check,
    element: KPIView,
    path: "kpi",
    title: "KPI",
  },
  {
    id: 3,
    icon: filial,
    element: OylikView,
    path: "oylik",
    title: "Oylik",
  },
];

export const student = [
  {
    id: 2,
    icon: Check,
    element: StudentTolovView,
    path: "tolovlar",
    title: "To'lovlar",
  },
  {
    id: 3,
    icon: filial,
    element: KategoryaView,
    path: "kategorya",
    title: "Kategorya",
  },
];
