import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="React Bootcamp" status="Ongoing" trainer="John" duration="6 weeks" />
      <CohortDetails name="Angular Training" status="Completed" trainer="Sara" duration="4 weeks" />
    </div>
  );
}

export default App;
