import { CSSProperties, ReactNode } from "react";

interface RowProps {
  children: ReactNode;
  gap?: string;
  justify?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  styles?: CSSProperties;
}

export const Row = ({
  children,
  gap = "1rem",
  justify = "flex-start",
  wrap = "wrap",
  styles,
}: RowProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: gap,
        alignItems: "center",
        justifyContent: justify,
        flexWrap: wrap,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};
