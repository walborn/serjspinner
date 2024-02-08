import React from 'react';
import PropTypes from 'prop-types';
import './spinner.style.scss';
import SpinnerIcon from './spinner.icon';

const Spinner = ({ width, height, className, isLoadingSpinner }) => {
  const companyMainColorHex = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--company-mainColorHex');

  const colorHex = isLoadingSpinner ? '#fff' : companyMainColorHex || '#545B5E';

  return (
    <div
      className={`root ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <SpinnerIcon colorHex={colorHex} />
    </div>
  );
};

Spinner.defaultProps = {
  width: 125,
  height: 125,
  className: ''
};

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string
};

export default Spinner;