import classNames from "classnames";
import type { ComponentPropsWithRef, ReactNode } from "react";

const TextBox = ({
  icon,
  className,
  ...props
}: { icon?: ReactNode } & ComponentPropsWithRef<"input">) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className={classNames(
          "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className,
          {
            "ps-10": !!icon,
          }
        )}
        {...props}
      />
      <div className="absolute start-2 top-1/2 -translate-y-1/2">{icon}</div>
    </div>
  );
};
export default TextBox;
