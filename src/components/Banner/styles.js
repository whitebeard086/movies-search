import styled from "styled-components";

export const Container = styled.section`
  position: relative;
`;

export const ImageContainer = styled.div`
    
    img {
        height: 550px;
        width: 100%;
        object-fit: cover;

        @media ${props => props.theme.breakpoints.sm} {
            height: 257px;
        }
    }
`;

export const TextContainer = styled.div`
    position: absolute;
    bottom: 7rem;
    margin: 0 4rem;
    display: flex;
    
    @media ${props => props.theme.breakpoints.md} {
        justify-content: center;
        margin: 0;
    }

    @media ${props => props.theme.breakpoints.sm} {
        justify-content: flex-start;
        left: 20%;
        margin: 0;
    }

    
`;

export const Text = styled.h1`
    font-size: 72px;
    line-height: 93.74px;
    color: #FFF;
    width: 50%;
    

    @media ${props => props.theme.breakpoints.md} {
        text-align: center;
    }

    @media ${props => props.theme.breakpoints.sm} {
        font-size: 28px;
        line-height: 36.46px;
        width: 80%;
    }
`;
