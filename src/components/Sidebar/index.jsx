import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Arrow,
  Body,
  ChildWrapper,
  Container,
  ExitIcon,
  LogOut,
  Logo,
  Menu,
  MenuItem,
  Side,
  Wrapper,
} from "./style";
import Navbar from "../Navbar";
import { Profile } from "./profile";
import sidebar from "../../utils/sidebar";
import React, { useEffect, useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = JSON.parse(localStorage.getItem("open"));
    setOpen(path || []);
  }, []);

  useEffect(() => {}, [location]);

  const onClickLogo = () => {
    navigate("/");
  };
  const onLogOut = () => {
    navigate("/login");
  };

  const onClickParent = ({ id, children, path, title }, e) => {
    e.preventDefault();

    if (open?.includes(id)) {
      let data = open.filter((val) => val !== id);
      localStorage.setItem("open", JSON.stringify(data));
      setOpen(data);
    } else {
      localStorage.setItem("open", JSON.stringify([...open, id]));
      setOpen([...open, id]);
    }
    if (!children) {
      navigate(path, { state: { parent: title } });
    }
  };
  const onClickChild = (parent, child, path, e) => {
    e.preventDefault();
    navigate(path, { state: { parent, child } });
  };
  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>Webbrain CRM</Logo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
            const active = open.includes(parent.id);
            const { icon: Icon } = parent;
            const activePath = location.pathname?.includes(parent.path);

            return !parent.hidden ? (
              <React.Fragment key={parent.id}>
                <MenuItem
                  onClick={(e) => onClickParent(parent, e)}
                  active={activePath.toString()}
                >
                  <MenuItem.Title active={activePath.toString()}>
                    <Icon className="icon" /> {parent.title}
                  </MenuItem.Title>
                  {parent?.children?.length && (
                    <Arrow active={active.toString()} />
                  )}
                </MenuItem>
                <ChildWrapper active={active.toString()}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem
                        key={child?.id}
                        to={child.path}
                        onClick={(e) =>
                          onClickChild(parent.title, child.title, child.path, e)
                        }
                        active={location.pathname
                          ?.includes(child.path)
                          .toString()}
                      >
                        <MenuItem.Title>{child?.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </React.Fragment>
            ) : null;
          })}
        </Menu>

        <LogOut onClick={onLogOut}>
          <ExitIcon /> Chiqish
        </LogOut>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};
