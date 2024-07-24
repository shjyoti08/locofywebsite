import styled from "styled-components";
import PropTypes from "prop-types";

const MobileIconRoot = styled.img`position: absolute;
height: 74.98%;
width: calc(100% - 28.1px);
top: 12.47%;
right: 0.881rem;
bottom: 12.56%;
left: 0.875rem;
max-width: 100%;
overflow: hidden;
max-height: 100%;
z-index: 1;
`;


const MobileIcon = ({ className="" }) => {
  return (
    <MobileIconRoot loading="lazy" alt="" src="/mobile.svg" / className={className}>);
};

MobileIcon.propTypes = {
  className: PropTypes.string
};

export default MobileIcon;
