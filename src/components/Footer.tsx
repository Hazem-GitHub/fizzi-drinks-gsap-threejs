import { FizziBreeziLogo } from "./FizziBreeziLogo";
import CircleText from "./CircleText";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-[#fff16e] text-[#fb825d]">
            <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10 items-center">
                <FizziBreeziLogo />
                <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
                    {/* Circles Text */}
                    <CircleText />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
