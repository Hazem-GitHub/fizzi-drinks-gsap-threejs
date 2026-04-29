import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client";
import clsx from "clsx";

type Props = {
    buttonLink: LinkField
    buttonText: string | null
    className?: string
};

const Button = ({
    buttonLink,
    buttonText,
    className
}: Props) => {
    return (
        <PrismicNextLink field={buttonLink} className={clsx("rounded-xl bg-lime-400 px-8 py-4 text-center text-sm font-bold uppercase text-blue-950 transition-colors tracking-wide duration-250 hover:bg-lime-300 md:text-base", className)}>
              {buttonText}
        </PrismicNextLink>
        );
};

export default Button;
