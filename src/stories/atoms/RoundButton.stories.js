import RoundButton from '../../components/atoms/RoundButton.svelte';
import '../../../public/assets/styles/index.css';
import '../../../public/assets/styles/tailwind.css';

export default {
  title: 'Atoms/Button',
  component: RoundButton,
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: RoundButton,
  props: args,
  on: {
    click: onClick,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'RoundButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'RoundButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'RoundButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'RoundButton',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  backgroundColor:"#e3e",
  primary: true,
  label: 'RoundButton',
};
