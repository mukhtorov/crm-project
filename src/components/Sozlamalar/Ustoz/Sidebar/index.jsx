import { Outlet } from "react-router-dom";
import { ustoz } from "../../../../utils/sozlamalar";
import { Body, Container, Link, Sidebar, Wrapper } from "./style";

export const UstozSidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar>
          {ustoz.map((item) => {
            const { icon: Icon } = item;
            return (
              <Link
                key={item.path}
                to={`/sozlamalar/ustoz/${item.path}`}
                state={{ parent: ["Sozlamalar", "Ustoz"], child: item.title }}
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

export default UstozSidebar;
