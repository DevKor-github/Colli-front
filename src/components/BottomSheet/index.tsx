import { Sheet, Stack, View, styled, withStaticProperties } from 'tamagui'

import CheckBox from '@/components/CheckBox'
import Radio from '@/components/Radio'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import Bar from '@assets/Svgs/Bar.svg'

const Frame = styled(Stack, {
  display: 'flex',
  flexDirection: 'row',
  height: 48,
  paddingVertical: 8,
  paddingLeft: 20,
  paddingRight: 24,
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch'
})

export const Option = withStaticProperties(Frame, {
  Text: Typography,
  Radio: Radio,
  CheckBox: CheckBox
})

interface BottomSheetProps {
  isOpen: boolean
  bottomSheetTitle: string
  setOpen: (value: boolean) => void
  children: React.ReactNode
}

const BottomSheet = ({ isOpen, bottomSheetTitle, setOpen, children }: BottomSheetProps) => {
  // const [position, setPosition] = useState(0)
  return (
    <Sheet
      // forceRemoveScrollEnabled={isOpen}
      modal
      open={isOpen}
      onOpenChange={setOpen}
      // snapPoints={undefined}
      snapPointsMode="fit"
      // dismissOnSnapToBottom
      // position={position}
      // onPositionChange={setPosition}
      zIndex={100_000}
      animation="medium"
    >
      <Sheet.Overlay />
      <Sheet.Frame justifyContent="flex-start" alignItems="center">
        <View display="flex" py={8} jc="center" ai="center" gap={10} alignSelf="stretch">
          <Bar />
        </View>
        <View display="flex" fd="row" h={48} py={8} pl={20} pr={24} jc="flex-start" ai="center" alignSelf="stretch">
          <Typography type="B" fontSize={16} textColor={customPalettes.gray[900]}>
            {bottomSheetTitle}
          </Typography>
        </View>
        {children}
        <View display="flex" h={44} jc="center" ai="center" gap={10} alignSelf="stretch" />
      </Sheet.Frame>
    </Sheet>
  )
}

export default BottomSheet
