import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

async function openImagePicker({ mediaTypes, allowsEditing, quality } = {}) {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need media library permissions to make this work!');
    }
  }

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes,
    allowsEditing,
    quality,
    base64: true,
  });

  if (!result.cancelled) {
    return 'data:image/jpeg;base64,' + result.base64;
  }
}

export default openImagePicker;
