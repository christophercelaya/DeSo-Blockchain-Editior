import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const SimpleWelcomeScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackgroundoP}
        source={Images.Wallpaper}
        resizeMode={'cover'}
      >
        <View pointerEvents={'auto'}>
          <Text style={[styles.TextQQ, { color: theme.colors.strongInverse }]}>
            {'Welcome'}
          </Text>

          <Text style={[styles.TextNA, { color: theme.colors.strongInverse }]}>
            {"Now that you're here, \n\nLets get started 💪🏼\n"}
          </Text>
        </View>
        <View pointerEvents={'auto'} />
        <View pointerEvents={'auto'}>
          <ButtonSolid
            style={[
              styles.ButtonSolidWR,
              { borderColor: theme.colors.lightInverse },
            ]}
            title={'Sign Up'}
            loading={false}
            disabled={false}
          />
          <ButtonOutline
            style={[
              styles.ButtonOutline_5U,
              {
                borderColor: theme.colors.lightInverse,
                color: theme.colors.strongInverse,
              },
            ]}
            title={'Log In'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextQQ: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 8,
  },
  TextNA: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 16,
  },
  ButtonSolidWR: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonOutline_5U: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 16,
  },
  ImageBackgroundoP: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(SimpleWelcomeScreen);
