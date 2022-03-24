import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const DisplayMovies = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  flex-wrap: nowrap;
`;

export const Text = styled.h2`
    margin-bottom: 2rem;
`;

export const MoviesContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  height: 300px;
  width: 300px;

  @media ${props => props.theme.breakpoints.sm} {
    height: 200px;
    width: 200px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    height: 300px;
    width: 300px;
    border-radius: 12px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const Title = styled.h3`
  position: absolute;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;
