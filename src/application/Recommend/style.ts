import styled from 'styled-components';
import {style} from '../../assets/global-style';
export const Content = styled.div`
    position: fixed;
    top: 94px;
    left: 0;
    width: 100%;
    .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${style["theme-color"]};
`

// bottom: ${(props: { play: number }) => props.play > 0? "60px" : 0};