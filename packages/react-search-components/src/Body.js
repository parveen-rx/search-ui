import PropTypes from "prop-types";
import React from "react";

function Body({ children, sideContent, bodyContent, bodyHeader, bodyFooter }) {
  return (
    <div className="reference-ui-body">
      <div className="search-results">
        <div className="sidebar">{sideContent}</div>
        <div className="results">
          <div className="results__header">
            <div className="meta">{bodyHeader}</div>
          </div>
          <div className="results__body">{children || bodyContent}</div>
          <div className="results__footer">{bodyFooter}</div>
        </div>
      </div>
    </div>
  );
}

Body.propTypes = {
  children: PropTypes.node,
  sideContent: PropTypes.node,
  bodyContent: PropTypes.node,
  bodyHeader: PropTypes.node,
  bodyFooter: PropTypes.node
};

export default Body;