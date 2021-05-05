import React, { memo } from 'react';
import { Button } from '@yandex/ui/Button/desktop/bundle';

function RidesApp() {
  return (
    <div>
      RidesApp
      <Button view="default" size="m">
        Show me rides
      </Button>
    </div>
  );
}

export default memo(RidesApp);
