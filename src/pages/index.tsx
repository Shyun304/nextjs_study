import { css } from "@emotion/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return <div css={containerStyle}>Hello World!!! </div>;
};

const containerStyle = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export default Home;
