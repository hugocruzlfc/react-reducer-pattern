import React from "react";

const noop = () => {};

export interface SwitchProps {
  on: boolean;
  className?: string;
  "aria-label"?: string;
  onClick: () => void;
}

export const Switch: React.FC<SwitchProps> = ({
  on,
  className = "",
  "aria-label": ariaLabel,
  onClick,
  ...props
}) => {
  const btnClassName = [
    className,
    "toggle-btn",
    on ? "toggle-btn-on" : "toggle-btn-off",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label
      aria-label={ariaLabel || "Toggle"}
      style={{ display: "block" }}
    >
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={noop}
        onClick={onClick}
        data-testid="toggle-input"
      />
      <span
        className={btnClassName}
        {...props}
      />
    </label>
  );
};
