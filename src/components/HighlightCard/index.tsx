import React from "react";
import {
  Comtainer,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

interface Props {
  title: string;
  amount: string;
  lastTransactiom: string;
  type: "up" | "total" | "down";
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard({ title, amount, lastTransactiom, type }: Props) {
  return (
    <Comtainer type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransactiom}</LastTransaction>
      </Footer>
    </Comtainer>
  );
}
