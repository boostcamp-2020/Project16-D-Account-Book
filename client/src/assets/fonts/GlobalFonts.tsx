import { createGlobalStyle } from 'styled-components';

import SpoqaHanSansThinTtf from './SpoqaHanSansThin.ttf';
import SpoqaHanSansThinWoff from './SpoqaHanSansThin.woff';
import SpoqaHanSansThinWoff2 from './SpoqaHanSansThin.ttf';

import SpoqaHanSansLightTtf from './SpoqaHanSansLight.ttf';
import SpoqaHanSansLightWoff from './SpoqaHanSansLight.woff';
import SpoqaHanSansLightWoff2 from './SpoqaHanSansLight.ttf';

import SpoqaHanSansRegularTtf from './SpoqaHanSansRegular.ttf';
import SpoqaHanSansRegularWoff from './SpoqaHanSansRegular.woff';
import SpoqaHanSansRegularWoff2 from './SpoqaHanSansRegular.ttf';

import SpoqaHanSansBoldTtf from './SpoqaHanSansBold.ttf';
import SpoqaHanSansBoldWoff from './SpoqaHanSansBold.woff';
import SpoqaHanSansBoldWoff2 from './SpoqaHanSansBold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 200;
    src: url(${SpoqaHanSansThinWoff2}) format('woff2'),
    url(${SpoqaHanSansThinWoff}) format('woff'),
    url(${SpoqaHanSansThinTtf}) format('truetype');
  }
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    src: url(${SpoqaHanSansLightWoff2}) format('woff2'),
    url(${SpoqaHanSansLightWoff}) format('woff'),
    url(${SpoqaHanSansLightTtf}) format('truetype');
  }
  @font-face {
	font-family: 'Spoqa Han Sans';
	font-style: normal;
    font-weight: 400;
    src: url(${SpoqaHanSansRegularWoff2}) format('woff2'),
    url(${SpoqaHanSansRegularWoff}) format('woff'),
    url(${SpoqaHanSansRegularTtf}) format('truetype');
  }
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 500;
    src: url(${SpoqaHanSansBoldWoff2}) format('woff2'),
    url(${SpoqaHanSansBoldWoff}) format('woff'),
    url(${SpoqaHanSansBoldTtf}) format('truetype');
  }
`;
