import React, { memo } from 'react';

function RoversApp() {
  return <div>RoversApp</div>;
}

const EnhancedRoversApp = memo(RoversApp);

export { EnhancedRoversApp as RoversApp };
