import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 140px;
  background: #292929;

  @media ${props => props.theme.breakpoints.md} {
      justify-content: center;
  }

  @media ${props => props.theme.breakpoints.sm} {
      height: 67px;
  }
`;

export const LogoContainer = styled.div`
  border: 1px solid #fff;
  padding: .5rem;
  margin: 0 4rem;

  
`;

export const Logo = styled.h2`
  color: #fff;
  font-weight: normal;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: .7rem;
  }
`;
