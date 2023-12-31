import styled from "styled-components";


export const Container = styled.div`
  height: 60px;
  background-color: mediumblue;
  color:white;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between


`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  display: flex;

`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;