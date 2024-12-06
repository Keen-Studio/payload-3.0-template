import { Field } from 'payload';
const SocialIcons: Field = {
    name: 'socials',
    type: 'array',
    fields: [
      {
        name: 'platform',
        type: 'select',
        options: [
          {
            label: 'Twitter',
            value: 'twitter',
          },
          {
            label: 'Facebook',
            value: 'facebook',
          },
          {
            label: 'Instagram',
            value: 'instagram',
          },
          {
            label: 'LinkedIn',
            value: 'linkedin',
          },
          {
            label: 'YouTube',
            value: 'youtube',
          },
        ],
      },
      {
        name: 'link',
        label: 'URL',
        type: 'text',
      },
    ],
  };

export default SocialIcons;
