import { CustomButton } from '@/components/Buttons'
import { Typography } from '@/components/Typography'
import { BUTTON_TEXT_COLOR } from '@/constants/button'
import type { IconButtonProps } from '@/types/button'

export const IconButton = ({ color, size, handlePress, children, icon, borderWidth, borderColor }: IconButtonProps) => {
  const fontSize = size === 'sml' ? 14 : 16
  const type = 'M'
  const textColor = BUTTON_TEXT_COLOR[color]
  return (
    <CustomButton color={color} size={size} onPress={handlePress} borderWidth={borderWidth} borderColor={borderColor}>
      {icon}
      <Typography fontSize={fontSize} type={type} textColor={textColor}>
        {children}
      </Typography>
    </CustomButton>
  )
}
