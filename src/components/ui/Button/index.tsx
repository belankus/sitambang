import Link from "next/link";

type Proptypes = {
  type: "button" | "submit" | "reset" | "link";
  children: React.ReactNode;
  variant?: "primary" | "action" | "hollow" | "white";
  className?: string;
  href?: string | object;
  target?: "_self" | "_blank";
  disabled?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const color = {
  primary: "bg-primary border-primary text-white",
  action: "bg-action border-action text-white",
  hollow: "bg-transparent border-white text-white",
  white: "bg-white border-white text-lava-black",
};

const Button = (props: Proptypes) => {
  const {
    children,
    variant,
    className,
    onClick,
    type = "button",
    href = "#",
    target = "_self",
    disabled = false,
  } = props;
  return (
    <>
      {type !== "link" && (
        <button
          type={type}
          className={`${
            color[variant || "primary"]
          } rounded-lg border px-5 py-3 font-semibold ${className || ""}`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
      {type === "link" && (
        <Link
          href={href}
          className={`${
            color[variant || "primary"]
          } block rounded-md border px-3 py-1.5 font-semibold ${className || ""}`}
          target={target}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
