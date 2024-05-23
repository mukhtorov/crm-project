import { useLocation } from "react-router-dom";
import { Container } from "./style";
// import { Breadcrumb } from "../../components/Generics/BreadCrumb";

export const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      {/* <Breadcrumb /> */}
      <h1>{location.pathname} page</h1>
      <h1>Coming soon...</h1>
    </Container>
  );
};

export default Generics;
