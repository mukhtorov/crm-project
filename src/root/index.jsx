import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "./style";
import sidebar from "../utils/sidebar";
import { Sidebar } from "../components/Sidebar";
import Checkin from "../components/Guruhlar/Guruhlar/Checkin";
import UmumiySidebar from "../components/Sozlamalar/Umumiy/Sidebar";
import { umumiy } from "../utils/sozlamalar";

export const Root = () => {
  return (
    <Container>
      <Routes>
        {/* MAIN */}
        <Route element={<Sidebar />}>
          {/* SozlamalarR */}
          <Route element={<UmumiySidebar />}>
            {umumiy.map((item) => {
              const { element: Element } = item;
              return (
                <Route
                  key={item.id}
                  path={`sozlamalar/umumiy/${item.path}`}
                  element={<Element />}
                />
              );
            })}
          </Route>
          <Route path={"/guruhlar/guruhlar/checkin"} element={<Checkin />} />;
          {sidebar.map((parent) => {
            const ElementParent = parent.element;
            if (parent?.children) {
              return parent.children.map((child) => {
                const ElementChild = child.element;
                return (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<ElementChild />}
                  />
                );
              });
            } else
              return (
                !parent.hidden && (
                  <Route
                    key={parent.id}
                    path={parent.path}
                    element={<ElementParent />}
                  />
                )
              );
          })}
        </Route>

        {sidebar.map((parent) => {
          const ElementParent = parent.element;
          return (
            parent.hidden && (
              <Route
                key={parent.id}
                path={parent.path}
                element={<ElementParent />}
              />
            )
          );
        })}

        <Route path="/" element={<Navigate to={"/analitika"} />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </Container>
  );
};

export default Root;
