import { View, styled, withStaticProperties } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

const ModalWrapper = styled(View, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 56
})
const ModalContent = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  // paddingHorizontal: 56,
  paddingVertical: 28,
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  flexBasis: 0,
  borderTopLeftRadius: 6,
  borderTopRightRadius: 6,
  backgroundColor: customPalettes.snow[50]
})

const ModalButton = styled(View, {
  display: 'flex',
  // paddingHorizontal: 55,
  paddingVertical: 15,
  flexGrow: 1,
  flexBasis: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#222222'
})

const CustomModal = withStaticProperties(ModalWrapper, {
  ModalContent,
  ModalButton
})

interface ModalContainerProps<T, R> {
  modalText: string
  actionText: string
  subActionText?: string
  handleAction: (arg: T) => void
  handleSubAction?: (arg: R) => void
}
const ModalContainer = ({
  modalText,
  actionText,
  subActionText,
  handleAction,
  handleSubAction
}: ModalContainerProps<T, R>) => {
  return (
    <CustomModal>
      <View display="flex" flexDirection="row">
        <CustomModal.ModalContent>
          <Typography type="M" fontSize={16} textColor={customPalettes.gray[950]}>
            {modalText}
          </Typography>
        </CustomModal.ModalContent>
      </View>
      <View
        display="flex"
        flexDirection="row"
        gap={2}
        bg={'#323232'}
        borderBottomRightRadius={6}
        borderBottomLeftRadius={6}
      >
        {subActionText && (
          <CustomModal.ModalButton onPress={handleSubAction} borderBottomLeftRadius={6}>
            <Typography type="M" fontSize={16} textColor={'#9A9A9A'}>
              {subActionText}
            </Typography>
          </CustomModal.ModalButton>
        )}
        <CustomModal.ModalButton
          onPress={handleAction}
          borderBottomRightRadius={6}
          borderBottomLeftRadius={!subActionText ? 6 : 0}
        >
          <Typography type="M" fontSize={16} textColor={customPalettes.snow[50]}>
            {actionText}
          </Typography>
        </CustomModal.ModalButton>
      </View>
    </CustomModal>
  )
}

export default ModalContainer
