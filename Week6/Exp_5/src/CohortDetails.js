import React from 'react';
import styles from './CohortDetails.module.css'; // Step 8

function CohortDetails({ name, status, trainer, duration }) {
  const headingStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue' // Step 10
  };

  return (
    <div className={styles.box}> {/* Step 9 */}
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Trainer:</dt>
        <dd>{trainer}</dd>
        <dt>Duration:</dt>
        <dd>{duration}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
