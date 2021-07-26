import { LabIcon } from '@jupyterlab/ui-components';

import mostUsedSvg from '../style/icons/grade.svg';
import viewListSvg from '../style/icons/view_list.svg';
import viewModuleSvg from '../style/icons/view_module.svg';
import webDsSvg from '../style/icons/webds.svg';
import wifiSvg from '../style/icons/wifi.svg';
import settingsSvg from '../style/icons/settings.svg';

export const mostUsedIcon = new LabIcon({
  name: 'enhLauncher:most-used',
  svgstr: mostUsedSvg
});
export const viewListIcon = new LabIcon({
  name: 'enhLauncher:list',
  svgstr: viewListSvg
});
export const viewModuleIcon = new LabIcon({
  name: 'enhLauncher:module',
  svgstr: viewModuleSvg
});
export const webDsIcon = new LabIcon({
  name: 'enhLauncher:webds',
  svgstr: webDsSvg
});
export const wifiIcon = new LabIcon({
  name: 'enhLauncher:wifi',
  svgstr: wifiSvg
});
export const settingsIcon = new LabIcon({
  name: 'enhLauncher:settings',
  svgstr: settingsSvg
});