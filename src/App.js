import React from "react";
import "./App.less";
import { Calculator } from "./Calculator";
import { EvaIcon } from "./components/EvaIcon";
import styled from "styled-components";

const Title = styled.div`
  font-family: Rambla;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #2f80ed;
`;

const Header = styled.div`
  display: flex;
  width: 400px;
  margin-bottom: 41px;
  margin-top: 19px;
  @media (max-width: 400px) {
    margin-bottom: 37px;
    margin-top: 39px;
  }
`;

export const App = () => {
  return (
    <div className="App">
      <Header>
        <EvaIcon
          style={{ margin: "0 66px 0 28px" }}
          fill="#828282"
          name="chevron-left"
          size="large"
        />
        <Title>Let’s plan your saving goal</Title>
      </Header>
      <Calculator />
    </div>
  );
};
