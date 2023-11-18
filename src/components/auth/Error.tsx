import { Paragraph } from "react-native-paper";
import LoginStyles from "../../styles/LoginStyles";

type error = {
  error: String;
};

export function Error(props: error) {
  return <Paragraph style={LoginStyles.error}>{props.error}</Paragraph>;
}
