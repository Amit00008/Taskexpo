"use client";
import { Tooltip } from "react-tooltip";

export default function TooltipProvider() {
  return (
    <Tooltip
      id="global-tooltip"
      place="top"
      effect="solid"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        zIndex: 9999, // Ensures it appears on top
      }}
    />
  );
}
