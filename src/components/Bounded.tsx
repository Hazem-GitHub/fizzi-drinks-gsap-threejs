import clsx from "clsx";

type BoundedProps = React.HTMLAttributes<HTMLElement>;

export const Bounded = (props: BoundedProps) => {
  const { className, children, ...restProps } = props;

  return (
    <section
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </section>
  );
};