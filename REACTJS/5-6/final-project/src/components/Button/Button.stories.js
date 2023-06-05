import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
const Template = (args) => <Button {...args}></Button>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  url: '/static/media/user.06923d209d521d659ba7a6ddf626b44e.svg',
  name_button: 'Account',
  type: ''
}


// export const BlackButton = {
//   args: {
//     label: 'Button',
//     bgColor: 'black',
//     textColor: 'white'
//   },
// };

// export const RedButton = {
//   args: {
//     label: 'Red Button',
//     bgColor: 'white',
//     textColor: 'red',
//     boderColor: 'red',
//   },
// };


