import { IconPlus } from "@tabler/icons-react";
import { CustomButtonWrapper } from "./styles";

export interface IProps {
  type?: "button" | "submit" | "reset";
  label?: string;
  fontFamily?: string;
  fontSize?: string;
  widthSize?: string;
  customPadding?: string;
  withBG?: boolean;
  withIcone?: boolean;
  iconPosition?: "rtl" | "ltr";
  customIcon?: JSX.Element;
  withBorder?: boolean;
  onClick?: () => void;
  BGColor?: string;
  form?: string;
  borderRadius?: string;
  colorFont?: string;
  borderColor?: string;
  disabled?: boolean;
}
export default function CustomButton({
  type = "button",
  label,
  withBG = false,
  withIcone = false,
  withBorder = false,
  widthSize,
  customPadding,
  fontFamily,
  fontSize,
  BGColor,
  customIcon,
  iconPosition,
  form,
  borderRadius,
  colorFont,
  disabled,
  borderColor,
  ...rest
}: IProps) {
  return (
    <CustomButtonWrapper
      type={type}
      $withBG={withBG}
      $withBorder={withBorder}
      $widthSize={widthSize}
      $customPadding={customPadding}
      $fontFamily={fontFamily}
      $fontSize={fontSize}
      $BGColor={BGColor}
      $iconPosition={iconPosition}
      $borderRadius={borderRadius}
      form={form}
      $colorFont={colorFont}
      {...rest}
      disabled={disabled}
      $borderColor={borderColor}
    >
      {label && label}
      {withIcone && <span>{customIcon ? customIcon : <IconPlus />}</span>}
    </CustomButtonWrapper>
  );
}
