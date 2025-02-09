import React from 'react';
import Visual from '../main/visual';
import Card from '../main/card';
import Custom from '../main/custom';

const Main = () => {
  return (
    <main>
      <Visual />
			<div className="inner1440">
				<Card />
				<Custom />
			</div>
    </main>
  );
};

export default Main;
