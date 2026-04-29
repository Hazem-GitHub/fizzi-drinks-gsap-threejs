import React from "react";
import { FizziBreeziLogo } from "@/components/FizziBreeziLogo";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="flex justify-center py-4 -mb-28">
            <FizziBreeziLogo className="z-10 h-20 cursor-pointer text-blue-950" />
        </header>
    );
};

export default Header;
