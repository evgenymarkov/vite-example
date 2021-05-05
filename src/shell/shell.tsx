import type { ReactNode } from 'react';
import React, { memo } from 'react';
import { configureRootTheme } from '@yandex/ui/Theme';
import { theme } from '@yandex/ui/Theme/presets/default';

configureRootTheme({ theme });

type Props = {
  children: ReactNode;
};

function Shell({ children }: Props) {
  return <div>{children}</div>;
}

const EnhancedShell = memo(Shell);

export { EnhancedShell as Shell };
