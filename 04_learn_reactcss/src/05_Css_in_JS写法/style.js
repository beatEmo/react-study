import { styled } from "styled-components";

export const AppWrapper = styled.div`
  .footer {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const SectionWrapper = styled.div.attrs({
  tcolor: (props) => props.color || "red",
  size: "12"
})`
  .title {
    font-size: ${(props) => props.size};
    color: ${(props) => props.tcolor};
    &:hover {
      background-color: purple;
    }
  }
  .content {
    font-size: 18px;
    color: green;
  }
`;
