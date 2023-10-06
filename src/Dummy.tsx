import { Text } from 'react-native';

type DummyProps = {
  text: string;
};

export const Dummy = ({ text }: DummyProps) => {
  return <Text>{text}</Text>;
};
