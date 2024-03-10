import { ScrollView } from 'react-native'
import { Circle, View } from 'tamagui'

import CheckBox from '@/components/CheckBox'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

const SpecificTask = () => {
  return (
    <View
      display="flex"
      flexDirection="row"
      paddingVertical={20}
      //   paddingHorizontal={16}
      pl={16}
      mt={16}
      alignItems="flex-start"
      gap={12}
      alignSelf="stretch"
    >
      <View>
        <CheckBox checked />
      </View>
      <View display="flex" alignItems="flex-start" gap={32} flexGrow={1} flexBasis={0}>
        <View display="flex" alignItems="flex-start" gap={32} alignSelf="stretch">
          <View display="flex" paddingVertical={6} alignItems="center" gap={10} alignSelf="stretch" pr={16}>
            <Typography type="B" fontSize={20} textColor={customPalettes.gray[950]}>
              하위 태스크 이름이 들어가는 공간입니다. 보여지는 텍스트의 라인 수 제한은 없습니다.
            </Typography>
          </View>
          <View display="flex" alignSelf="stretch" gap={24}>
            <View display="flex" height={136} alignItems="flex-start" gap={24} alignSelf="stretch" pr={16}>
              <Typography
                type="R"
                fontSize={14}
                textColor={customPalettes.gray[900]}
                flexGrow={1}
                alignSelf="stretch"
                flexBasis={0}
                ellipse
                numberOfLines={8}
              >
                {`여행은 새로운 경험과 추억을 선사하지만, 올바른 준비가 필수입니다. 이번 블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히 소개합니다. 

첫째, 편안한 여행을 위한 양질의 여행 가방. 두 번째는 다양한 환경에 대비할 수 있는 다용도 의류. 세 번째 아이템은 여행 중 긴급 상황에 대비한 응급 키트입니다. 네 번째는 휴대용 충전기와 보조 배터리로. 이 공간을 넘으면 점처리 됩니다.`}
              </Typography>
            </View>
            <ScrollView
              style={{ display: 'flex', width: '100%', gap: 8 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ display: 'flex', gap: 8, width: '100%', alignSelf: 'stretch', height: 88 }}
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <View
                  key={index}
                  width={88}
                  height={88}
                  borderRadius={3.52}
                  opacity={0.3 + index * 0.2}
                  backgroundColor={customPalettes.gray[300]}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View display="flex" alignItems="flex-start" gap={16} alignSelf="stretch" pr={16}>
          <View display="flex" flexDirection="row" alignItems="flex-start" gap={8} alignSelf="stretch">
            <View w={72} h={36} bg={customPalettes.gray[200]} br={18} />
            <View w={72} h={36} bg={customPalettes.gray[200]} br={18} />
          </View>
          <View
            display="flex"
            fd="row"
            paddingVertical={10}
            pl={12}
            pr={16}
            bg={customPalettes.gray[100]}
            br={10}
            jc="space-between"
            ai="center"
            alignSelf="stretch"
          >
            <View display="flex" fd="row" ai="center" gap={8}>
              <View display="flex" fd="row" w={132} ai="flex-start" gap={4}>
                <Circle w={30} h={30} bg={customPalettes.gray[200]} />
                <Circle w={30} h={30} bg={customPalettes.gray[200]} />
                <Circle w={30} h={30} bg={customPalettes.gray[200]} />
                <Circle w={30} h={30} bg={customPalettes.gray[200]} />
              </View>
              <Typography type="R" fontSize={12} textColor={customPalettes.gray[700]}>
                8개의 댓글
              </Typography>
            </View>
            <Typography type="R" fontSize={12} textColor={customPalettes.gray[700]}>
              3 시간 전
            </Typography>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SpecificTask
