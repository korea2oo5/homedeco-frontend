import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

//  Button 리액트 컴포넌트를 만들어서 그안에 StyledButton을 렌더링해 준 이유는 추후 이 컴포넌트를 사용할 때 자동으로 import가 되게 하기 위해서
const StyledButton = styled.button`
    border : none;
    border-radius : 4px;
    font-size : 1rem;
    font-weight : bold;
    padding : 0.25rem 1rem;
    color : white;
    outline : none
    cursor : pointer;

    background: ${palette.gray[8]};
    &:hover {
        background : ${palette.gray[6]};
    }
    ${(props) =>
      props.fullWidth &&
      css`
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 100%;
        font-size: 1.125rem;
      `}
      ${(props) =>
        props.cyan &&
        css`
          background: ${palette.cyan[5]};
          &:hover {
            background: ${palette.cyan[4]};
          }
        `}
`;
// Button 컴포넌트를 만드는 과정에서 {...props} 를 StyledButton에 설정하는 의미는 Button이 받아오는 props를 모두 StyledButton에 전달한다는 의미
const Button = (props) => <StyledButton {...props} />;

export default Button;
