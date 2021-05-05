import React, { memo } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@yandex/ui/Button/desktop/bundle';

function RoversApp() {
  const [_, setLocation] = useLocation();

  const handleButtonClick = () => {
    setLocation('/rides');
  };

  return (
    <div>
      <Button view="default" size="m" onClick={handleButtonClick}>
        Go to Rides App
      </Button>
    </div>
  );
}

export default memo(RoversApp);
