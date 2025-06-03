import React, { useId } from "react";

const input = React.forwardRef(function input(
  { label, tyoe = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className={``} htmlFor={id}>
          {label}
        </label>
      )}
      <input type={type} className={`px-3 py-2 rounded-lg outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full ${className}`}
      ref={ref}
      {...props}
      id={id}
      />
    </div>
  );
});

export default input;
