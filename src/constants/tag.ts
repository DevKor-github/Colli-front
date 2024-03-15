import type { fontVariant } from '@/constants/typography';
import { customPalettes } from '@/theme/customPalettes';


export interface TagProps {
  color: 'light' | 'dark'
  children: React.ReactNode
  handlePress?: () => void
}

export interface FilterTagProps {
  children?: React.ReactNode
  tagType: 'icon' | 'text'
  isPressed: boolean
  handlePress?: () => void
}

interface TagTypographyProps {
  fontSize: number
  type: fontVariant
  color: string
}

interface TagTypography {
  big: TagTypographyProps
  sml: TagTypographyProps
  true: TagTypographyProps
  false: TagTypographyProps
}
export const TAG_TYPOGRAPHY: TagTypography = {
  big: {
    fontSize: 14,
    type: 'M',
    color: customPalettes.gray[500]
  },
  sml: {
    fontSize: 12,
    type: 'M',
    color: customPalettes.gray[500]
  },
  true: {
    fontSize: 16,
    type: 'M',
    color: customPalettes.blue[500]
  },
  false: {
    fontSize: 14,
    type: 'M',
    color: customPalettes.gray[300]
  }
}