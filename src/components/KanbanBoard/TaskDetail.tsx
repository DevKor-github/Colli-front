import { useEffect, useState } from 'react'
import { Pressable, TextInput } from 'react-native'
import { useRecoilState } from 'recoil'
import { Sheet, View } from 'tamagui'

import { Button } from '@/components/Buttons'
import Picker from '@/components/Picker'
import { Tag } from '@/components/Tags'
import { Typography } from '@/components/Typography'
import { REMINDER_DATE } from '@/mocks/data/teamTask'
import { defaultTeamTask } from '@/recoil/atom'
import { customPalettes } from '@/theme/customPalettes'
import type { KanBanStatus, TaskDetailProps } from '@/types/kanBanBoard'
import DownArrow from '@assets/Svgs/ArrowDown.svg'
import Check from '@assets/Svgs/Check.svg'
import Bell from '@assets/Svgs/Reminder.svg'
import RightArrow from '@assets/Svgs/RightArrow.svg'

export const TaskDetail = ({
  id,
  open,
  handleClose,
  title,
  category,
  status,
  dueDate,
  reminderDate,
  notes
}: TaskDetailProps) => {
  const [position, setPosition] = useState(0)
  const [snapPoint, setSnapPoint] = useState(57)
  const [changeStatus, setChangeStatus] = useState(false)
  const [changeReminder, setChangeReminder] = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [notesInput, setNotesInput] = useState(notes)
  const statusKR = status === 'todo' ? '예정' : status === 'inProgress' ? '진행중' : '완료'
  const dueYear = dueDate.getFullYear()
  const dueMonth = dueDate.getMonth() + 1
  const dueDay = dueDate.getDate()
  const dueHour24 = dueDate.getHours()
  const dueAMPM = dueHour24 < 12 ? 1 : 2
  const dueHour = dueHour24 <= 12 ? dueHour24 : dueHour24 - 12
  const dueMinute = dueDate.getMinutes()
  const [titleInput, setTitleInput] = useState(title)
  const [, setDefaultTeamTask] = useRecoilState(defaultTeamTask)
  const [newStatus, setNewStatus] = useState(statusKR)
  const [newDueDate, setNewDueDate] = useState(dueDate)
  const [pickedDate, setPickedDate] = useState({
    month: dueMonth,
    date: dueDay,
    ampm: dueAMPM,
    hour: dueHour,
    minute: dueMinute
  })

  const handleTitleSubmit = () => {
    setDefaultTeamTask(prev => {
      const newTask = prev.map(task => {
        if (task.id === id) {
          return { ...task, title: titleInput }
        }
        return task
      })
      return newTask
    })
  }
  const handleStatus = (option: string) => {
    setNewStatus(option)
  }
  const handleSetNewDueDate = (target: string, value: number) => {
    setPickedDate({ ...pickedDate, [target]: value })
  }
  const handleDueDate = () => {
    const { month, date, ampm, hour, minute } = pickedDate
    const newDate = new Date(
      `${dueYear}-${month}-${date} ${ampm === 1 ? `0${hour}` : `${hour + 12}`}:${minute - 1}:00Z`
    )
    setDefaultTeamTask(prev => prev.map(task => (task.id === id ? { ...task, dueDate: newDate } : task)))
    setShowPicker(!showPicker)
  }
  const handleReminder = (index: number) => {
    setDefaultTeamTask(prev => prev.map(task => (task.id === id ? { ...task, reminderDate: index } : task)))
  }
  const handleChangeClose = async () => {
    const result = await handleClose()
    if (result && statusKR !== newStatus) {
      const newStatusEn: KanBanStatus = newStatus === '예정' ? 'todo' : newStatus === '진행중' ? 'inProgress' : 'done'
      setTimeout(
        () =>
          setDefaultTeamTask(prev => {
            const newTask = prev.map(task => {
              if (task.id === id) {
                return { ...task, status: newStatusEn }
              }
              return task
            })
            return newTask
          }),
        500
      )
    }
  }
  const handleNoteSubmit = () => {
    setDefaultTeamTask(prev => prev.map(task => (task.id === id ? { ...task, notes: notesInput } : task)))
  }
  const handleDelete = async () => {
    const result = await handleClose()
    if (result) {
      setTimeout(() => setDefaultTeamTask(prev => prev.filter(task => task.id !== id)), 500)
    }
  }
  useEffect(() => {
    if (changeStatus) setSnapPoint(75)
    else if (showPicker) setSnapPoint(85)
    else if (changeReminder) setSnapPoint(90)
    else setSnapPoint(57)
  }, [changeStatus, changeReminder, showPicker])

  return (
    <Sheet
      modal
      forceRemoveScrollEnabled={open}
      //   dismissOnSnapToBottom
      animation="medium"
      open={open}
      onOpenChange={handleChangeClose}
      snapPoints={[snapPoint]}
      moveOnKeyboardChange
      position={position}
      onPositionChange={setPosition}
    >
      <Sheet.Overlay animation="medium" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Frame flex={1} borderRadius={20}>
        <Sheet.ScrollView>
          <View display="flex" alignItems="center" justifyContent="center" h={20}>
            <View w={48} h={4} backgroundColor={customPalettes.gray[200]} mt={2} br={2} />
          </View>
          <View display="flex" alignItems="flex-start" paddingHorizontal={24} gap={10} mb={10}>
            <TextInput
              placeholder={title}
              placeholderTextColor={customPalettes.gray[200]}
              autoFocus={false}
              value={titleInput}
              onChangeText={setTitleInput}
              onSubmitEditing={handleTitleSubmit}
              style={{
                height: 40,
                fontSize: 18,
                fontFamily: 'Pretendard-Bold',
                color: customPalettes.gray[700]
              }}
            />
          </View>
          <View
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal={24}
            paddingVertical={8}
            alignSelf="stretch"
            h={56}
          >
            <Typography type="M" fontSize={16} textColor={customPalettes.gray[700]}>
              카테고리
            </Typography>
            <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 19 }}>
              <View
                display="flex"
                paddingHorizontal={16}
                paddingVertical={10}
                alignItems="center"
                justifyContent="center"
                gap={4}
                borderRadius={8}
                backgroundColor={customPalettes.blue[50]}
              >
                <Typography type="M" fontSize={16} textColor={customPalettes.blue[500]}>
                  {category}
                </Typography>
              </View>
              <RightArrow />
            </Pressable>
          </View>
          <View
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal={24}
            paddingVertical={8}
            alignSelf="stretch"
            h={56}
          >
            <Typography type="M" fontSize={16} textColor={customPalettes.gray[700]}>
              진행상태
            </Typography>
            <Pressable
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 19 }}
              onPress={() => setChangeStatus(!changeStatus)}
            >
              <Tag type="dot" status={true} handlePress={() => setChangeStatus(!changeStatus)}>
                {newStatus}
              </Tag>
              {changeStatus ? <DownArrow /> : <RightArrow />}
            </Pressable>
          </View>
          {changeStatus && (
            <View>
              {['예정', '진행중', '완료'].map((option, index) => (
                <Pressable
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingRight: 24,
                    paddingLeft: 56,
                    paddingVertical: 8,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    height: 48
                  }}
                  onPress={() => handleStatus(option)}
                >
                  <Typography type="R" fontSize={16} textColor={customPalettes.gray[700]}>
                    {option}
                  </Typography>
                  {option === newStatus && <Check />}
                </Pressable>
              ))}
            </View>
          )}
          <View
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal={24}
            paddingVertical={8}
            alignSelf="stretch"
            h={56}
          >
            <Typography type="M" fontSize={16} textColor={customPalettes.gray[700]}>
              마감기한
            </Typography>
            <Pressable
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 19 }}
              onPress={() => setShowPicker(!showPicker)}
            >
              <Typography type="M" fontSize={16} textColor={customPalettes.gray[500]}>
                {dueYear}년 {dueMonth}월 {dueDay}일
              </Typography>
              {showPicker ? <DownArrow /> : <RightArrow />}
            </Pressable>
          </View>
          {showPicker && (
            <Picker
              month={dueMonth}
              date={dueDay}
              ampm={dueAMPM}
              hour={dueHour}
              minute={dueMinute}
              handleChange={handleSetNewDueDate}
            />
          )}
          {showPicker && (
            <View
              display="flex"
              flexDirection="row"
              gap={12}
              paddingHorizontal={24}
              paddingVertical={12}
              alignSelf="stretch"
            >
              <Button color="gray" size="mid" handlePress={() => setShowPicker(!showPicker)}>
                취소
              </Button>
              <Button color="primary" size="mid" handlePress={handleDueDate}>
                완료
              </Button>
            </View>
          )}
          <View
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal={24}
            paddingVertical={8}
            alignSelf="stretch"
            h={56}
          >
            <Typography type="M" fontSize={16} textColor={customPalettes.gray[700]}>
              리마인드
            </Typography>
            <Pressable
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 19 }}
              onPress={() => setChangeReminder(!changeReminder)}
            >
              <Typography type="M" fontSize={16} textColor={customPalettes.gray[500]}>
                {REMINDER_DATE[reminderDate]}
              </Typography>
              {changeReminder ? <DownArrow /> : <RightArrow />}
            </Pressable>
          </View>
          {changeReminder && (
            <View>
              <Pressable
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingRight: 24,
                  paddingLeft: 32,
                  paddingVertical: 8,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  height: 48
                }}
                onPress={() => handleReminder(0)}
              >
                <View display="flex" flexDirection="row" gap={8} alignItems="center">
                  <Bell />
                  <Typography
                    type={'없음' === REMINDER_DATE[reminderDate] ? 'M' : 'R'}
                    fontSize={16}
                    textColor={customPalettes.gray[700]}
                  >
                    없음
                  </Typography>
                </View>

                {'없음' === REMINDER_DATE[reminderDate] && <Check />}
              </Pressable>
            </View>
          )}
          {changeReminder && (
            <View>
              {['30분 전', '1시간 전', '1일 전', '2일 전', '1주 전'].map((option, index) => (
                <Pressable
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingRight: 24,
                    paddingLeft: 56,
                    paddingVertical: 8,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    height: 48
                  }}
                  onPress={() => handleReminder(index + 1)}
                >
                  <Typography
                    type={option === REMINDER_DATE[reminderDate] ? 'M' : 'R'}
                    fontSize={16}
                    textColor={customPalettes.gray[700]}
                  >
                    {option}
                  </Typography>
                  {option === REMINDER_DATE[reminderDate] && <Check />}
                </Pressable>
              ))}
            </View>
          )}
          <View
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            paddingHorizontal={24}
            paddingVertical={16}
            alignSelf="stretch"
            gap={12}
          >
            <Typography type="M" fontSize={16} textColor={customPalettes.gray[700]}>
              메모
            </Typography>
            <TextInput
              placeholder={notes}
              placeholderTextColor={customPalettes.gray[200]}
              autoFocus={false}
              value={notesInput}
              onChangeText={setNotesInput}
              onSubmitEditing={handleNoteSubmit}
              //   onKeyPress={e => e.nativeEvent.key === 'Enter' && handleNoteSubmit()}
              blurOnSubmit
              multiline
              style={{
                fontSize: 14,
                fontFamily: 'Pretendard-Regular',
                color: customPalettes.gray[500],
                textAlignVertical: 'top'
              }}
            />
            <View
              display="flex"
              paddingHorizontal={20}
              paddingVertical={8}
              justifyContent="center"
              alignItems="center"
              gap={16}
              alignSelf="stretch"
            >
              <Button color="gray" size="big" handlePress={handleDelete}>
                태스크 삭제하기
              </Button>
            </View>
          </View>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}
