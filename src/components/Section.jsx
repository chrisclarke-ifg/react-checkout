import React from 'react';

const Section = ({children, className}) => (
    <div className={`checkout__section ${className}`}>{children}</div>
  );

export default Section;