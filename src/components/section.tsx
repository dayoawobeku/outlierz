import React from 'react';

interface  IChildren {
    children: React.ReactNode
}
const Section: React.FC<IChildren> = ({ children }) => {
  return (
    <section
      style={{
        margin: '20px 0 20px 0',
      }}>
      {children}
    </section>
  );
};

export default Section;
