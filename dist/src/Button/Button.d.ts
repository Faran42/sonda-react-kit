import React from "react";
import "./Button.css";
export interface ButtonProps extends React.ComponentProps<"button"> {
    kind?: "primary" | "secondary";
}
export declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
