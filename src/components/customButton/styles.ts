import { themeExtended } from "../../global-styles";
import styled from "styled-components";

export const CustomButtonWrapper = styled.button<{
  $withBG: boolean;
  $withBorder: boolean;
  $widthSize: string | undefined;
  $customPadding: string | undefined;
  $fontFamily: string | undefined;
  $fontSize: string | undefined;
  $BGColor: string | undefined;
  $borderRadius: string | undefined;
  $iconPosition?: "rtl" | "ltr";
  $colorFont: string | undefined;
  $borderColor?: string;
}>`
  border: none;
  background-color: ${(props) =>
    props.$withBG
      ? themeExtended.colours.PrimaryLoulouRed
      : themeExtended.colours.White};
  background-color: ${(props) => props.$BGColor && props.$BGColor};
  border: ${(props) =>
    props.$withBorder
      ? `1px solid ${themeExtended.colours.PrimaryLoulouRed}`
      : "none"};
  border-color: ${(props) =>
    props.$borderColor ? props.$borderColor : "none"};
  color: ${(props) =>
    props.$withBG
      ? props.$colorFont
        ? props.$colorFont
        : themeExtended.colours.CreamyLoulou
      : props.$colorFont
      ? props.$colorFont
      : themeExtended.colours.PrimaryLoulouRed};
  font-family: ${(props) =>
    props.$fontFamily ? props.$fontFamily : themeExtended.fonts.changa_medium};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "14px")};
  padding: ${(props) =>
    props.$customPadding ? props.$customPadding : "12px 24px"};
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : "16px"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  direction: ${(props) => (props.$iconPosition ? props.$iconPosition : "rtl")};
  gap: 8px;
  width: ${(props) => (props.$widthSize ? props.$widthSize : "auto")};
  cursor: pointer !important;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  white-space: nowrap;
  &:lang(en) {
    direction: ltr;
  }
  * {
    cursor: pointer !important;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    svg {
      color: ${(props) =>
        props.$withBG
          ? props.$colorFont
            ? props.$colorFont
            : themeExtended.colours.CreamyLoulou
          : props.$colorFont
          ? props.$colorFont
          : themeExtended.colours.PrimaryLoulouRed};
    }
  }
  &:hover {
    color: ${(props) =>
      props.$withBG
        ? props.$colorFont
          ? props.$colorFont
          : themeExtended.colours.CreamyLoulou
        : props.$colorFont
        ? props.$colorFont
        : themeExtended.colours.LoulouRedLight};
    border: ${(props) =>
      props.$withBorder
        ? `1px solid ${themeExtended.colours.LoulouRedLight}`
        : "none"};
    background-color: ${(props) =>
      props.$BGColor
        ? props.$BGColor
        : props.$withBG
        ? themeExtended.colours.LoulouRedLight
        : themeExtended.colours.CreamyLoulou};
  }
  &:disabled {
    color: ${(props) =>
      props.$withBG
        ? themeExtended.colours.DarkGray
        : themeExtended.colours.LightGray};
    background-color: ${(props) =>
      props.$withBG
        ? themeExtended.colours.LightGray
        : themeExtended.colours.White};
    border: ${(props) =>
      props.$withBorder
        ? `1px solid ${themeExtended.colours.LightGray}`
        : "none"};
    cursor: not-allowed !important;
    & > span {
      svg {
        color: ${(props) =>
          props.$withBG
            ? themeExtended.colours.DarkGray
            : themeExtended.colours.LightGray};
      }
    }
  }
`;
