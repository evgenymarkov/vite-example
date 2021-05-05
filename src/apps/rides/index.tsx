import React, { memo } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@yandex/ui/Button/desktop/bundle';

function RidesApp() {
  const [_, setLocation] = useLocation();

  const handleButtonClick = () => {
    setLocation('/rovers');
  };

  return (
    <div>
      <Button view="default" size="m" onClick={handleButtonClick}>
        Go to Rovers App
      </Button>
    </div>
  );
}

export default memo(RidesApp);
