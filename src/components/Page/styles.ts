import styled from 'styled-components';
import imgModels from './../../assets/Model-S.jpg'
import imgModelsY from './../../assets/Model-y.jpg'
import imgModels3 from './../../assets/Model-3.jpg'
import imgModelsX from './../../assets/Model-X.jpg'
import imgSolarPanels from './../../assets/solarPanels.jpeg'
import imgSolarRoof from './../../assets/solarRoof.jpg'
import imgAccessories from './../../assets/Accessories.jpg'




export const Container = styled.div`
.colored:nth-child(1) {
  background: #f1ffe7;
  background-image: url(${imgModels});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.colored:nth-child(2) {
/* background: #dfffd9; */
  background-image: url(${imgModelsY});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.colored:nth-child(3) {
/* background: #cdfeca; */
  background-image: url(${imgModels3});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.colored:nth-child(4) {
/* background: #bbfebb; */
  background-image: url(${imgModelsX});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.colored:nth-child(5) {
/* background: #a9fdac; */
  background-image: url(${imgSolarPanels});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.colored:nth-child(6) {
/* background: #90f29c; */
  background-image: url(${imgSolarRoof});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.colored:nth-child(7) {
/* background: #77e68c; */
  background-image: url(${imgAccessories});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  
 
}
`;

export const Spacer = styled.div`
  height: 15vh;
  color: #fff;
`