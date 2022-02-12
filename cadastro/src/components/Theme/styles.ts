import styled from "styled-components";

export const Container = styled.div`
    background-color: #6A5ACD;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 990px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #4B0082;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;