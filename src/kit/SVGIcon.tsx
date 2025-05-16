import React from "react";

const icons = import.meta.glob("../assets/*.svg", {
  eager: true,
  as: "raw",
});

interface SvgIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, className = "", ...props }) => {
  const rawSvg = icons[`../assets/${name}.svg`] as string | undefined;

  if (!rawSvg) {
    console.warn(`SVG "${name}" not found in assets.`);
    return null;
  }

  return (
    <span
      className={className}
      {...props}
      dangerouslySetInnerHTML={{ __html: rawSvg }}
    />
  );
};

export default SvgIcon;