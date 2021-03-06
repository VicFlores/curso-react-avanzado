import styled from 'styled-components';

export const Form = styled.form`
  padding: 16px 10px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;

  &[disabled] {
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 35px;
  display: block;
  width: 100%;
  text-align: center;

  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  padding: 8px 0;
  text-align: center;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
