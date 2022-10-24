import NextLink from "next/link";

export const Link = ({ to, children, className, size }) => {
  return (
    <NextLink href={to}>
      <a className={`hover:text-white py-2 px-4 duration-100] ${className}`}>
        {children}
      </a>
    </NextLink>
  );
};
