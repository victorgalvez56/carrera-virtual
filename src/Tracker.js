import React, { useEffect } from "react";

export default (WrappedComponent, options = {}) => {


  //todo: should this be handled in a global scope?
  const HOC = props => {

    return (
      <>
        <WrappedComponent {...props} />

      </>);
  };

  return HOC;
};
