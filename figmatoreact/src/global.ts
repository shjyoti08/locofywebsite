import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-gilroy: Gilroy;

/* font sizes */
--font-size-21xl: 2.5rem;
--font-size-96xl-8: 7.238rem;
--font-size-16xl: 2.188rem;
--font-size-39xl: 3.625rem;

/* Colors */
--color-gray-100: rgba(255, 255, 255, 0.1);
--color-gainsboro: rgba(230, 230, 230, 0.1);
--color-white: #fff;

/* Gaps */
--gap-3xl: 1.375rem;
--gap-xl: 1.25rem;

/* Paddings */
--padding-sm: 0.875rem;
--padding-11xl: 1.875rem;
--padding-smi: 0.812rem;
--padding-9xl: 1.75rem;
--padding-xl: 1.25rem;

/* Border radiuses */
--br-lgi-5: 19.5px;
--br-93xl-3: 112.3px;

}
`;
