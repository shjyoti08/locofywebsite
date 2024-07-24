import styled from "styled-components";
import TabletIcon from "../components/TabletIcon";
import MobileIcon from "../components/MobileIcon";
import FrameComponent from "../components/FrameComponent";

const HomeBg1Icon = styled.img`
  position: absolute;
  top: -12.094rem;
  left: 0.75rem;
  width: 117.75rem;
  height: 91.869rem;
  object-fit: cover;
`;
const BlockOne = styled.div`
  position: absolute;
  top: 61.5rem;
  left: 0rem;
  box-shadow: 0px 83.1px 110.86px rgba(2, 46, 86, 0.24);
  border-radius: 36.95px;
  background-color: #fbfbfd;
  width: 61.5rem;
  height: 91.075rem;
  transform: rotate(-90deg);
  transform-origin: 0 0;
`;
const Eea914c52db63757d68ceef0d00f1aIcon = styled.img`
  position: absolute;
  top: 1.063rem;
  left: 1.063rem;
  width: 88.888rem;
  height: 59.494rem;
  object-fit: cover;
  z-index: 1;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 112.28px;
  background: linear-gradient(93.65deg, #455dff, #0021fe);
  width: 100%;
  height: 100%;
  display: none;
`;
const RectangleParent = styled.div`
  position: absolute;
  height: calc(100% - 0.3px);
  top: 0rem;
  bottom: 0.019rem;
  left: 25.488rem;
  box-shadow: 0px 81.5px 108.67px rgba(2, 46, 86, 0.24);
  border-radius: 112.28px;
  background: linear-gradient(93.65deg, #455dff, #0021fe);
  width: 7.019rem;
`;
const RectangleGroup = styled.div`
  position: absolute;
  height: calc(100% - 0.3px);
  top: 0rem;
  bottom: 0.019rem;
  left: 8.488rem;
  box-shadow: 0px 81.5px 108.67px rgba(2, 46, 86, 0.24);
  border-radius: 112.28px;
  background: linear-gradient(93.65deg, #455dff, #0021fe);
  width: 7.019rem;
`;
const LaptopIcon = styled.img`
  position: absolute;
  height: 46.84%;
  width: 56.28%;
  top: 25.02%;
  right: 21.91%;
  bottom: 28.14%;
  left: 21.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
`;
const RectangleContainer = styled.div`
  position: absolute;
  height: calc(100% - 0.3px);
  top: 0.019rem;
  bottom: 0rem;
  left: 17.006rem;
  border-radius: 112.28px;
  background: linear-gradient(93.65deg, #455dff, #0021fe);
  width: 7.019rem;
`;
const DesktopMobileIcon = styled.img`
  position: absolute;
  height: 62.51%;
  width: 62.51%;
  top: 18.7%;
  right: 18.7%;
  bottom: 18.79%;
  left: 18.79%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
`;
const GroupDiv = styled.div`
  position: absolute;
  height: calc(100% - 0.3px);
  top: 0.019rem;
  bottom: 0rem;
  left: 0rem;
  border-radius: 112.28px;
  background: linear-gradient(93.65deg, #455dff, #0021fe);
  width: 7.019rem;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 44.5rem;
  left: 29.313rem;
  width: 32.506rem;
  height: 7.038rem;
  z-index: 3;
`;
const BlockOneParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 91.075rem;
  height: 61.5rem;
`;
const SignUpIcon = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  object-fit: contain;
  position: absolute;
  left: -3.75rem;
  top: 6.25rem;
  transform: scale(1.581);
`;
const WrapperSignUp = styled.div`
  position: absolute;
  top: 14.063rem;
  left: 78.625rem;
  border-radius: 36.67px;
  width: 21.5rem;
  height: 62.75rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FrameParent = styled.section`
  position: absolute;
  top: 14.313rem;
  left: 15.625rem;
  width: 100.125rem;
  height: 76.813rem;
  z-index: 1;
`;
const Group = styled.img`
  position: absolute;
  top: 40.938rem;
  left: 0rem;
  width: 35.081rem;
  height: 26.563rem;
  object-fit: contain;
  z-index: 3;
`;
const HomeBg1Parent = styled.main`
  position: absolute;
  height: 100%;
  top: 0rem;
  bottom: 0rem;
  left: 0.25rem;
  width: 118.5rem;
`;
const PluginFileCoverRoot = styled.div`
  width: 100%;
  height: 67.5rem;
  position: relative;
  background-color: #354df0;
  overflow: hidden;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 675px) {
    height: auto;
    min-height: 1080;
  }
`;

const PluginFileCover = () => {
  return (
    <PluginFileCoverRoot>
      <HomeBg1Parent>
        <HomeBg1Icon alt="" src="/homebg-1@2x.png" />
        <FrameParent>
          <BlockOneParent>
            <BlockOne />
            <Eea914c52db63757d68ceef0d00f1aIcon
              alt=""
              src="/eea914c52db63757d68ceef0d00f1a18-1@2x.png"
            />
            <FrameGroup>
              <RectangleParent>
                <FrameChild />
                <TabletIcon />
              </RectangleParent>
              <RectangleGroup>
                <FrameChild />
                <MobileIcon />
              </RectangleGroup>
              <RectangleContainer>
                <FrameChild />
                <LaptopIcon loading="lazy" alt="" src="/laptop.svg" />
              </RectangleContainer>
              <GroupDiv>
                <FrameChild />
                <DesktopMobileIcon
                  loading="lazy"
                  alt=""
                  src="/desktopmobile.svg"
                />
              </GroupDiv>
            </FrameGroup>
          </BlockOneParent>
          <WrapperSignUp>
            <SignUpIcon loading="lazy" alt="" src="/sign-up@2x.png" />
          </WrapperSignUp>
        </FrameParent>
        <Group alt="" src="/group-1000000860-1@2x.png" />
      </HomeBg1Parent>
      <FrameComponent />
    </PluginFileCoverRoot>
  );
};

export default PluginFileCover;
