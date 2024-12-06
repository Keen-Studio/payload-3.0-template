import { Page } from '@payload-types'

export type LinkAppearances = 'primary' | 'secondary'

export type Link = {
  link: {
    id: number;
    appearance?: LinkAppearances
    type: 'reference' | 'custom'
    label?: string
    reference?: {
      relationTo: 'pages'
      value: Page | 'null'
    }
    url?: string
    newTab?: boolean
  }
}

export type LinkGroup = {
  links?: Link[]
}
