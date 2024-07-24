import styled from "styled-components";
import PropTypes from "prop-types";

const TabletIconRoot = styled.img`position: absolute;
height: 74.98%;
width: calc(100% - 28.1px);
top: 12.47%;
right: 0.875rem;
bottom: 12.56%;
left: 0.881rem;
max-width: 100%;
overflow: hidden;
max-height: 100%;
z-index: 1;
`;


const TabletIcon = ({ className="" }) => {
  return (
    <TabletIconRoot loading="lazy" alt="" src="/tablet.svg" / className={className}>);
};

TabletIcon.propTypes = {
  className: PropTypes.string
};

export default TabletIcon;
