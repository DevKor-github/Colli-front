import { Stack, View, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

import DownOne from '@/assets/Svgs/DownOne.svg';
import RoundRefreshDefault from '@/assets/Svgs/RoundRefreshDefault.svg';
import RoundRefreshSelected from '@/assets/Svgs/RoundRefreshSelected.svg';
import { Typography } from '@/components/Typography';
import type { FilterTagProps } from '@/constants/tag';
import { customPalettes } from '@/theme/customPalettes';


const FilterTagContainer = styled(Stack, {
  borderRadius: 100,
  pressStyle: {
    opacity: 0.6
  },
  variants: {
    icon: {
      true: {
        backgroundColor: '#454545',
        display: 'inline-flex',
        padding: 8,
        alignItems: 'flex-start',
        gap: 10,
        height: 40,
        weight: 40
      },
      false: {
        backgroundColor: '#F0F0F0',
        display: 'inline-flex',
        padding: 8,
        alignItems: 'flex-start',
        gap: 10,
        height: 40,
        weight: 40
      }
    },
    text: {
      true: {
        backgroundColor: '#454545',
        display: 'flex',
        height: 40,
        paddingTop: 8,
        paddingBottom: 9,
        paddingLeft: 16,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      },
      false: {
        backgroundColor: '#F0F0F0',
        display: 'flex',
        height: 40,
        paddingTop: 8,
        paddingBottom: 9,
        paddingLeft: 16,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      }
    }
  } as const
})
export type TagContainerProps = GetProps<typeof FilterTagContainer>

const FilterTag = ({ children, tagType, isPressed, handlePress }: FilterTagProps) => {
  const onPress = handlePress ?? (() => {})

  if (tagType === 'icon') {
    return (
      <FilterTagContainer icon={isPressed} onPress={handlePress}>
        {isPressed ? <RoundRefreshSelected /> : <RoundRefreshDefault />}
      </FilterTagContainer>
    )
  } else {
    const textColor = isPressed ? '#ffffff' : '#2e2e2e'
    return (
      <FilterTagContainer text={isPressed} onPress={() => onPress()}>
        <View display="flex" alignItems="center" gap={4} flexDirection="row">
          <Typography type="R" fontSize={14} textColor={textColor}>
            {children}
          </Typography>
          <DownOne />
        </View>
      </FilterTagContainer>
    )
  }
}

export default FilterTag