import React from 'react'
import { Pressable, ScrollView } from 'react-native'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

export interface MentionItem {
  id: string
  name: string
}

interface MentionProps {
  keyWord: string
  data: MentionItem[]
  handleMention: (mention: string) => void
}
const Mention = ({ keyWord, data, handleMention }: MentionProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        display: 'flex',
        position: 'absolute',
        bottom: 60,
        zIndex: 1,
        right: 0,
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: customPalettes.snow[50]
      }}
    >
      {data
        .filter(item => (keyWord !== '' ? item.name.includes(keyWord) : item))
        .map(item => (
          <Pressable
            key={item.id}
            style={{ display: 'flex', height: 40, justifyContent: 'center', paddingLeft: 9 }}
            onPress={() => handleMention(` @${item.name} `)}
          >
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[950]}>
              {item.name}
            </Typography>
          </Pressable>
        ))}
    </ScrollView>
  )
}

export default Mention
