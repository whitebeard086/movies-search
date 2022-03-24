import styled from "styled-components";

export const SearchContainer = styled.div`
   margin-bottom: 2rem;
`

export const SearchItems = styled.div`

`

export const Text = styled.h4`
    font-size: 24px;
    font-weight: normal;

    @media ${props => props.theme.breakpoints.sm} {
        font-size: 16px;
    }
`

export const InputContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.5);
`

export const Input = styled.input`
    height: 54px;
    width: 100%;
    padding: 1rem;
    outline: none;
    border: none;

    @media ${props => props.theme.breakpoints.sm} {
        height: 34px;
    }
`