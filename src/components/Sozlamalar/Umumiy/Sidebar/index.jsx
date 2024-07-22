import { Outlet } from "react-router-dom";
import { umumiy } from "../../../../utils/sozlamalar";
import { Body, Container, Link, Sidebar, Wrapper } from "./style";

export const UmumiySidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar>
          {umumiy.map((item) => {
            const { icon: Icon } = item;
            return (
              <Link
                key={item.path}
                to={`/sozlamalar/umumiy/${item.path}`}
                state={{ parent: ["Sozlamalar", "Umumiy"], child: item.title }}
              >
                <Icon className="sub-icon" /> {item.title}
              </Link>
            );
          })}
        </Sidebar>
        <Body>
          <Outlet />
        </Body>
      </Wrapper>
    </Container>
  );
};

export default UmumiySidebar;
