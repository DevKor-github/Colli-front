import { Pressable } from 'react-native'
import type { MentionSuggestionsProps } from 'react-native-controlled-mentions'
import { Text, View } from 'tamagui'

const suggestions = [
  { id: '1', name: 'David Tabaka' },
  { id: '2', name: 'Mary' },
  { id: '3', name: 'Tony' },
  { id: '4', name: 'Mike' },
  { id: '5', name: 'Grey' }
]

export const renderSuggestions = ({ keyword, onSuggestionPress }: MentionSuggestionsProps) => {
  if (keyword == null) {
    return null
  }

  return (
    <View>
      {suggestions
        .filter(one => one.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
        .map(one => (
          <Pressable key={one.id} onPress={() => onSuggestionPress(one)} style={{ padding: 12 }}>
            <Text>{one.name}</Text>
          </Pressable>
        ))}
    </View>
  )
}
