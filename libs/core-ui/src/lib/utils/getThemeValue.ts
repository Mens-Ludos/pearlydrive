import type { Theme } from '@emotion/react';
import { get } from 'lodash';

export const getThemeValue =
  (theme: Theme) =>
  (path: string, fallbackValue?: string): string =>
    get(theme, path, fallbackValue);
