import { useState } from 'react'
import { Modal, Pressable, ScrollView } from 'react-native'
import { useRecoilState } from 'recoil'
import { Sheet, View } from 'tamagui'

import { Button } from '@/components/Buttons'
import { IconButton } from '@/components/Buttons/IconButton'
import { MemberCard } from '@/components/MemberCard'
import { SafeArea } from '@/components/SafeArea'
import { Typography } from '@/components/Typography'
import { TEAM_MEMBER } from '@/mocks/data/teamMember'
import { searchedMember } from '@/recoil/atom'
import { SearchHeader } from '@/screens/TeamMemberScreen/SearchHeader'
import { customPalettes } from '@/theme/customPalettes'
import ArrowDown from '@assets/Svgs/ArrowDown.svg'
import Copy from '@assets/Svgs/Copy.svg'
import Add from '@assets/Svgs/add.svg'
import SettingSml from '@assets/Svgs/settingSml.svg'
import Clipboard from '@react-native-clipboard/clipboard'

export const TeamMemberScreen = () => {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const hanleCopyToClipboard = () => {
    setOpen(false)
    setModalOpen(true)
    Clipboard.setString('COLI0817')
  }
  const [members, setMembers] = useRecoilState(searchedMember)

  return (
    <SafeArea team>
      <SearchHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: customPalettes.gray[50] }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <View
          display="flex"
          flexDirection="row"
          paddingHorizontal={20}
          paddingVertical={8}
          backgroundColor={customPalettes.snow[50]}
          justifyContent="flex-end"
          alignItems="center"
          gap={10}
        >
          <Typography type="M" fontSize={14} textColor={customPalettes.gray[300]}>
            DevKor
          </Typography>
          <ArrowDown />
        </View>
        {members.length === 0
          ? TEAM_MEMBER.map(member => (
              <MemberCard
                id={member.id}
                key={member.id}
                name={member.name}
                department={member.department}
                email={member.email}
                division={member.division}
                imgSrc={member.imgSrc}
              />
            ))
          : members.map(member => (
              <MemberCard
                id={member.id}
                key={member.id}
                name={member.name}
                department={member.department}
                email={member.email}
                division={member.division}
                imgSrc={member.imgSrc}
              />
            ))}
        <View
          mt={24}
          display="flex"
          flexDirection="row"
          paddingHorizontal={20}
          justifyContent="center"
          alignItems="center"
          gap={16}
        >
          <IconButton color="gray" size="mid" handlePress={() => {}} icon={<SettingSml />}>
            멤버 관리
          </IconButton>
          <IconButton
            color="gray"
            size="mid"
            handlePress={() => setOpen(true)}
            icon={<Add width="14" height="14" color={customPalettes.gray[500]} />}
          >
            멤버 추가
          </IconButton>
        </View>
      </ScrollView>
      <Sheet
        modal
        forceRemoveScrollEnabled={open}
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[32]}
      >
        <Sheet.Overlay animation="medium" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame borderRadius={20}>
          <View mt={24} display="flex" alignItems="flex-start" paddingHorizontal={20} paddingVertical={4} gap={10}>
            <Typography type="B" fontSize={17} textColor={customPalettes.gray[700]}>
              프로젝트 코드를 공유하세요
            </Typography>
          </View>
          <View paddingVertical={28} paddingHorizontal={10} justifyContent="center" alignItems="center">
            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.6 : 1 },
                {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  borderRadius: 10,
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                  backgroundColor: customPalettes.blue[50],
                  borderWidth: 1,
                  borderColor: customPalettes.blue[200]
                }
              ]}
              onPress={hanleCopyToClipboard}
            >
              <Copy />
              <Typography type="B" fontSize={17} textColor={customPalettes.blue[500]}>
                COLI0817
              </Typography>
            </Pressable>
          </View>
          <View display="flex" paddingHorizontal={20} paddingVertical={16} justifyContent="center" alignItems="center">
            <Button color="primary" size="big" handlePress={() => setOpen(false)}>
              닫기
            </Button>
          </View>
        </Sheet.Frame>
      </Sheet>
      <Modal animationType="fade" transparent={true} visible={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <View
          display="flex"
          flexDirection="column"
          flex={1}
          justifyContent="center"
          alignItems="center"
          borderRadius={10}
          backgroundColor={customPalettes.opacityD[400]}
        >
          <View
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width={276}
            height={104}
            alignItems="center"
            borderRadius={10}
            backgroundColor={customPalettes.gray[100]}
          >
            <View flex={3} justifyContent="center" alignItems="center">
              <Typography type="M" fontSize={16} textColor={customPalettes.gray[900]}>
                복사되었습니다
              </Typography>
            </View>
            <Pressable
              style={{
                width: '100%',
                flex: 2,
                borderTopWidth: 1,
                borderColor: customPalettes.gray[300],
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => setModalOpen(false)}
            >
              <Typography type="M" fontSize={16} textColor={customPalettes.blue[500]}>
                확인
              </Typography>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeArea>
  )
}
