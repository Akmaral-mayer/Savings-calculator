import React, { useState } from "react";
import "./Calculator.less";
import { Switch, Button, Input, DatePicker } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  switch_amount_type,
  calculate_by_total,
  calculate_by_monthly,
  set_date,
  set_monthly_amount,
  set_total_amount,
} from "./../store/calculator/actions";
import moment from "moment";

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
  left: 46px;
  top: 300px;
  background: #f4f8fa;
  border-radius: 4px 0px 0px 4px;
`;

const dateFormat = "MMMM, YYYY";

export const Calculator = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.calculator);

  const switchState = state.amount_type;

  function onSwitch(checked) {
    dispatch(switch_amount_type(checked));
  }

  const onChangeDate = (val) => {
    dispatch(set_date(val));
  };

  const onFinish = () => {
    switchState
      ? dispatch(calculate_by_total(state.total_amount / state.months_count))
      : dispatch(
          calculate_by_monthly(state.monthly_amount * state.months_count)
        );
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  return (
    <div className="calculator-container">
      <h1 className="title">
        Savings <br /> calculator
      </h1>
      <div>
        <Switch
          style={{ marginRight: 8 }}
          defaultChecked={switchState}
          onChange={onSwitch}
        />
        {switchState
          ? "Calculate by total amount"
          : "Calculate by monthly saving"}
        <Label>
          {switchState ? "Total amount" : "Calculate by monthly saving"}{" "}
        </Label>
        <Input
          type="number"
          value={switchState ? state.total_amount : state.monthly_amount}
          onChange={(e) => {
            switchState
              ? dispatch(set_total_amount(e.target.value))
              : dispatch(set_monthly_amount(e.target.value));
          }}
          style={{ height: 42 }}
          prefix={<Prefix>$</Prefix>}
        />
        <Label>{switchState ? "Reach goal by" : "Save until"} </Label>
        <DatePicker
          format={dateFormat}
          style={{ height: 42, width: "100%" }}
          picker="month"
          disabledDate={disabledDate}
          onChange={onChangeDate}
          value={moment(state.date)}
        />
        {/* Result block */}
        <div className="result-block">
          <div className="result-block_amount">
            <div>{switchState ? "Monthly amount" : "Total amount"}</div>
            <Price>
              ${switchState ? state.monthly_amount : state.total_amount}
            </Price>
          </div>
          <div className="result-block_text">
            {switchState ? (
              <>
                You are planning <b>{state.months_count} monthly</b> deposits to
                reach your <b>${state.total_amount}</b> goal by
                <b> {state.date}</b>
              </>
            ) : (
              <>
                You are saving <b>${state.monthly_amount} monthly</b> to save{" "}
                <b>${state.total_amount}</b> <b>by {state.date}</b>
              </>
            )}
          </div>
        </div>
        <Button className="finish_btn" onClick={onFinish} type="primary">
          Finish
        </Button>
      </div>
    </div>
  );
};
