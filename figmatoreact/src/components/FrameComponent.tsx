import styled from "styled-components";
import PropTypes from "prop-types";

const FreeDashboardUi = styled.div`
  width: 73.688rem;
  position: relative;
  letter-spacing: 0.63px;
  font-weight: 900;
  display: inline-block;
  min-height: 9.063rem;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-39xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-16xl);
  }
`;
const FreeDashboardUiKitWrapper = styled.div`
  width: 99.188rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameChild = styled.div`
  height: 4.688rem;
  width: 19.813rem;
  position: relative;
  box-shadow: 0px 73.9px 98.53px rgba(2, 46, 86, 0.24);
  border-radius: 19.47px;
  background-color: var(--color-gray-100);
  display: none;
`;
const Layouts = styled.b`
  width: 15.75rem;
  position: relative;
  font-size: var(--font-size-21xl);
  letter-spacing: 0.22px;
  display: inline-block;
  font-family: var(--font-gilroy);
  color: var(--color-white);
  text-align: center;
  z-index: 1;
`;
const RectangleParent = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-9xl) var(--padding-smi);
  background-color: var(--color-gray-100);
  width: 19.813rem;
  box-shadow: 0px 73.9px 98.53px rgba(2, 46, 86, 0.24);
  border-radius: 19.47px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  white-space: nowrap;
  z-index: 3;
  &:hover {
    background-color: var(--color-gainsboro);
  }
`;
const BiggestUiKit = styled.b`
  width: 15.563rem;
  position: relative;
  font-size: var(--font-size-21xl);
  letter-spacing: 0.22px;
  display: inline-block;
  font-family: var(--font-gilroy);
  color: var(--color-white);
  text-align: center;
  z-index: 1;
`;
const RectangleGroup = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-11xl) var(--padding-smi);
  background-color: var(--color-gray-100);
  width: 19.813rem;
  box-shadow: 0px 73.9px 98.53px rgba(2, 46, 86, 0.24);
  border-radius: 19.47px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  white-space: nowrap;
  z-index: 3;
  &:hover {
    background-color: var(--color-gainsboro);
  }
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const FrameParentRoot = styled.header`
  position: absolute;
  top: 1.5rem;
  left: 10.25rem;
  width: 103.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-96xl-8);
  color: var(--color-white);
  font-family: var(--font-gilroy);
`;

const FrameComponent = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <FreeDashboardUiKitWrapper>
        <FreeDashboardUi>Free Dashboard Ui Kit</FreeDashboardUi>
      </FreeDashboardUiKitWrapper>
      <FrameGroup>
        <RectangleParent>
          <FrameChild />
          <Layouts>300+ Layouts</Layouts>
        </RectangleParent>
        <RectangleGroup>
          <FrameChild />
          <BiggestUiKit>Biggest Ui Kit</BiggestUiKit>
        </RectangleGroup>
      </FrameGroup>
    </FrameParentRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
