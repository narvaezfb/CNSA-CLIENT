import React from "react";

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from './../../assets/images/logo-dark.svg';
 * import logo from './../../assets/images/logo.svg';
 *
 */

// ===========================|| LOGO SVG ||=========================== //

const Logo = () => {
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="90"
      height="55"
      viewBox="0 0 90 55"
    >
      <defs>
        <image
          id="image10"
          width="90"
          height="56"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
      <use xlinkHref="#image10"></use>
    </svg>
  );
};

export default Logo;
