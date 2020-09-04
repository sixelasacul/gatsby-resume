import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const BaseStyles = createGlobalStyle`
    html {
        ${tw`font-sans bg-no-op-gray-100`}
    }
`;
