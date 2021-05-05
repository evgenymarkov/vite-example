import React, { memo } from 'react';

function RidesApp() {
  return <div>RidesApp</div>;
}

const EnhancedRidesApp = memo(RidesApp);

export { EnhancedRidesApp as RidesApp };
