import { customPalettes } from '@/theme/customPalettes'

export const CHIP_TEXT_COLOR = {
  gray: {
    true: customPalettes.snow[50],
    false: customPalettes.gray[400]
  },
  team: {
    true: customPalettes.blue[500],
    false: customPalettes.gray[400]
  }
}
