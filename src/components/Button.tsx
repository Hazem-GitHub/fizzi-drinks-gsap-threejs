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
        <PrismicNextLink field={buttonLink} className={clsx("rounded-xl bg-blue-600 px-5 py-4 text-center text-xs font-bold uppercase text-white transition-colors tracking-wide duration-150 hover:bg-blue-700 md:text-sm", className)}>
              {buttonText}
        </PrismicNextLink>
        );
};

export default Button;
