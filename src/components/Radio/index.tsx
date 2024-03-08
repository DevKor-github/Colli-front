import { Stack, styled, withStaticProperties } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'
import useToggle from '@/util/useToggle'

const Frame = styled(Stack, {
  display: 'flex',
  width: 24,
  height: 24,
  padding: 5,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  flexShrink: 0,
  borderRadius: 100,
  borderColor: customPalettes.wf[100],
  variants: {
    checked: {
      true: {
        borderWidth: 2,
        borderColor: customPalettes.wf[100]
      },
      false: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: customPalettes.wf[120]
      }
    }
  } as const
})
const Indicator = styled(Stack, {
  width: 14,
  height: 14,
  borderRadius: 100,
  backgroundColor: customPalettes.wf[100]
})

const CustomRadio = withStaticProperties(Frame, {
  Indicator
})

interface RadioProps {
  checked: boolean
}
const Radio = ({ checked }: RadioProps) => {
  const [isChecked, setIsChecked] = useToggle(checked)
  return (
    <CustomRadio checked={isChecked} onPress={setIsChecked}>
      {isChecked && <CustomRadio.Indicator />}
    </CustomRadio>
  )
}

export default Radio
