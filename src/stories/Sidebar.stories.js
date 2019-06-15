import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Sidebar from '../components/sidebar/Sidebar';

export const sidebar = {
  darkMode: false,
  sections: [],
  open: true,
}

export const actions = {
  toggleSidebar: action('toggleSidebar')
}
storiesOf('Sidebar', module)
  .add('default', () => <Sidebar {...sidebar} {...actions}/>)
  .add('closed', () => <Sidebar {...sidebar} open={false} {...actions}/>)
  .add('dark', () => <Sidebar {...sidebar} darkMode={true} {...actions}/>)
  .add('populated', () => <Sidebar {...sidebar} sections={[{label:1, link:1},{label:2, link: 2},{label: 3, link: 3},{label: 4,link:4}]} {...actions}/>)
