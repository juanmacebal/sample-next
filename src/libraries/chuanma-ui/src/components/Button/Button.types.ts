export interface ButtonProps {
  text?: string,
  variant: "primary" | "secondary",
  disabled?: boolean,
  onClick?: () => void,
}