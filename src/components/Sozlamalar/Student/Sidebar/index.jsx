import { Outlet } from "react-router-dom";
import { student } from "../../../../utils/sozlamalar";
import { Body, Container, Link, Sidebar, Wrapper } from "./style";

export const StudentSidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar>
          {student.map((item) => {
            const { icon: Icon } = item;
            return (
              <Link
                key={item.path}
                to={`/sozlamalar/student/${item.path}`}
                state={{ parent: ["Sozlamalar", "Student"], child: item.title }}
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

export default StudentSidebar;
