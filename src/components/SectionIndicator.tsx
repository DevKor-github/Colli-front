import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import Symbol from '@assets/Svgs/COLLI/Symbol.svg'

export const SectionIndicator = ({ text }: { text: string }) => {
  return (
    <View display="flex" flexDirection="row" gap={8} alignItems="center">
      <Symbol />
      <Typography type="M" fontSize={14} textColor={customPalettes.gray[400]}>
        {text}
      </Typography>
    </View>
  )
}

SectionIndicator
