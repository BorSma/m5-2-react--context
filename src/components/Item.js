import React from "react";
import styled from "styled-components";

const Item = ({
  index,
  name,
  cost,
  value,
  numOwned,
  handleAttemptedPurchase,
}) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (index === 0) {
      ref.current.focus();
    }
  }, [index]);

  return (
    <Wrapper ref={ref} onClick={handleAttemptedPurchase}>
      <Left>
        <Name>{name}</Name>
        <Info>
          Cost: {cost} cookie(s). Produces {value} cookies/second.
        </Info>
      </Left>
      <Right>{numOwned}</Right>
    </Wrapper>
  );
};

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Wrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #444;
  color: #fff;
  text-align: left;
  padding: 15px 0;
`;

const Left = styled.div`
  flex: 1;
`;

const Name = styled.h4`
  font-size: 22px;
`;

const Info = styled.div`
  color: #ccc;
  font-size: 15px;
`;

const Right = styled.div`
  font-size: 32px;
  padding: 0 20px;
`;

export {Item, items};


