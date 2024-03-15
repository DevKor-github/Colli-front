import { Stack, styled, withStaticProperties } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'
import useToggle from '@/util/useToggle'

import Check from 'assets/Svgs/Check.svg'

const Frame = styled(Stack, {
  display: 'flex',
  width: 24,
  height: 24,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  flexShrink: 0,
  borderRadius: 4,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: customPalettes.wf[100],
  variants: {
    checked: {
      true: {
        backgroundColor: customPalettes.wf[100]
      },
      false: {
        borderColor: customPalettes.wf[120]
      }
    }
  }
})
const Indicator = styled(Stack, {})

const CustomCheckBox = withStaticProperties(Frame, {
  Indicator
})

interface CheckBoxProps {
  checked: boolean
}
const CheckBox = ({ checked }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useToggle(checked)
  return (
    <CustomCheckBox checked={isChecked} onPress={setIsChecked}>
      <CustomCheckBox.Indicator>{isChecked && <Check />}</CustomCheckBox.Indicator>
    </CustomCheckBox>
  )
}

export default CheckBox
