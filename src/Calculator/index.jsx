import React, { useState } from "react";
import "./Calculator.less";
import { Switch, Button, Input, DatePicker } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { switch_amount_type } from "./../store/calculator/actions";

const Label = styled.div`
  font-family: Rambla;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #102c51;
  margin-top: 22px;
`;

const Price = styled.div`
  font-family: Rambla;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #2f80ed;
`;

const Prefix = styled.div`
  // width: 42px;
  // height: 42px;
  left: 46px;
  top: 300px;
  background: #f4f8fa;
  border-radius: 4px 0px 0px 4px;
`;

const dateFormat = "MMMM, YYYY";

export const Calculator = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.calculator);

  // const [switchBtn, setSwitch] = useState(state.monthly_amount);
  const switchBtn = state.monthly_amount;

  function onChange(checked) {
    dispatch(switch_amount_type(checked));
    console.log(state.monthly_amount);
  }

  return (
    <div className="calculator-container">
      <h1 className="title">
        Savings <br /> calculator
      </h1>
      <div>
        <Switch
          style={{ marginRight: 8 }}
          defaultChecked={state.monthly_amount}
          onChange={onChange}
        />
        {switchBtn
          ? "Calculate by monthly saving"
          : "Calculate by total amount"}
        <Label>Total amount</Label>
        <Input style={{ height: 42 }} prefix={<Prefix>$</Prefix>} />
        <Label>Reach goal by</Label>
        <DatePicker
          format={dateFormat}
          style={{ height: 42, width: "100%" }}
          picker="month"
        />
        {/* Result block */}
        <div className="result-block">
          <div className="result-block_amount">
            <div>{switchBtn ? "Monthly amount" : "Total amount"}</div>
            <Price>$961.53</Price>
          </div>
          <div className="result-block_text">
            {switchBtn ? (
              <>
                You are planning <b>26 monthly</b> deposits to reach your{" "}
                <b>$25, 000</b> goal by
                <b> April 2022.</b>
              </>
            ) : (
              <>
                You are saving <b>$960 monthly</b> to save <b>$25, 000</b>{" "}
                <b>by April 2022.</b>
              </>
            )}
          </div>
        </div>
        <Button className="finish_btn" type="primary">
          Finish
        </Button>
      </div>
    </div>
  );
};
