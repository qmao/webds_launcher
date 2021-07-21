import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the my_launcher extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'my_launcher:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension my_launcher is activated!');
  }
};

export default plugin;
