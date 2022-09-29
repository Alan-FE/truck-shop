import { BREAKPOINT } from '@angular/flex-layout';

const MY_BREAKPOINTS = [
  { alias: 'xs', mediaQuery: 'screen and (max-width: 768px)'},
  { alias: 'sm', mediaQuery: 'screen and (min-width: 768px) and (max-width: 992px)'},
  { alias: 'md', mediaQuery: 'screen and (min-width: 992px) and (max-width: 1199px)'},
  { alias: 'lg', mediaQuery: 'screen and (min-width: 1200px) and (max-width: 1919px)'},
  { alias: 'xl', mediaQuery: 'screen and (min-width: 1920px) and (max-width: 5000px)'},

  { alias: 'lt-sm', mediaQuery: 'screen and (max-width: 450px)'},
  { alias: 'lt-md', mediaQuery: 'screen and (max-width: 992px)'},
  { alias: 'lt-lg', mediaQuery: 'screen and (max-width: 1199px)'},
  { alias: 'lt-xl', mediaQuery: 'screen and (max-width: 1919px)'},

  { alias: 'gt-xs', mediaQuery: 'screen and (min-width: 768px)'},
  { alias: 'gt-sm', mediaQuery: 'screen and (min-width: 992px)'},
  { alias: 'gt-md', mediaQuery: 'screen and (min-width: 1200px)'},
  { alias: 'gt-lg', mediaQuery: 'screen and (min-width: 1920px)'},
];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: MY_BREAKPOINTS,
  multi: true
};