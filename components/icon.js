import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default () =>  <Icon name="happy" size={80} color="#bf1313" />;
