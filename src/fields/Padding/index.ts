import { Field } from 'payload';

const Padding: Field = {
  name: 'padding',
  label: 'Padding',
  type: 'group',
  fields: [
    {
      name: 'paddingTop',
      label: 'Padding Above',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ]
    },
    {
      name: 'paddingBottom',
      label: 'Padding Below',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ]
    },
  ],
};

export default Padding;
