import { styled } from "styled-components";

export const WwButton = styled.button`
  padding: 8px 30px;
  color: skyblue;
  border: none;
`;

export const WwwDiv = styled(WwButton)`
  /* background-color: #eee; */
  background: red;
`;

export const ProfileWrapper = styled.div`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize};
`;
