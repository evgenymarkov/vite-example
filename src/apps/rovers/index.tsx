import React, { useState, memo } from 'react';
import { Textarea } from '@yandex/ui/Textarea/desktop/bundle';

function RoversApp() {
  const [value, setValue] = useState('');

  return (
    <div>
      RoversApp
      <Textarea
        size="m"
        view="default"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default memo(RoversApp);
