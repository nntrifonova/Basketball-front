import React from "react";
import styled from "styled-components";

const HorizontalMargin = styled.span`
  display: flex;
  width: flex;
`;

const VerticalMargin = styled.span`
  display: flex;
  height: flex;
`;

function Marginer(props: any) {
    const { direction } = props;

    if (direction === "horizontal") return <HorizontalMargin {...props} />;
    else {
        return <VerticalMargin {...props} />;
    }
}

Marginer.defaultProps = {
    direction: "horizontal",
};

export { Marginer };