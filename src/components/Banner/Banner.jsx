import { Container, ImageContainer, Img, Text, TextContainer } from "./styles";

const Banner = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/banner.jpg" alt="banner" />
      </ImageContainer>
      <TextContainer>
        <Text>Watch something incredible.</Text>
      </TextContainer>
    </Container>
  );
};
export default Banner;
