import styled from "styled-components";
export const Onglet = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const Onglets = styled.div`
  border: 2px solid #8b8b8b;
  text-decoration: none;
  margin: 2px;
  border-radius: 5px;
  width: 30%;

  &:hover {
    background-color: #c0c0c0;
    -webkit-box-shadow: 5px 5px 15px 5px #8b8b8b;
    box-shadow: 5px 5px 15px 5px #8b8b8b;
  }
`;

export const FakeInput = styled.div`
  border: 5px solid rgba(199, 198, 204, 0.16);
  border-radius: 40px;
  margin: 0 auto;
  width: 500px;
`;

export const Name = styled.h1`
  color: #940101;
`;
