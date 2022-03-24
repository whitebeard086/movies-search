
import { Banner, Header } from "../components";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};
