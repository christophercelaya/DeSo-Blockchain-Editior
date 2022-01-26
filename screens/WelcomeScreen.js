import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        style={styles.ImageBackgrounds1}
        source={Images.Space}
        resizeMode={'cover'}
      >
        <View style={styles.ViewU5} pointerEvents={'auto'}>
          <View
            style={[styles.Viewpj, { backgroundColor: theme.colors.strong }]}
            pointerEvents={'auto'}
          >
            <ImageBackground
              style={styles.ImageBackgroundzD}
              source={{
                uri: 'https://static.draftbit.com/images/placeholder-image-background.png',
              }}
              resizeMode={'cover'}
            />
          </View>
        </View>

        <View style={styles.ViewOn} pointerEvents={'auto'}>
          <View
            style={[
              styles.View_3a,
              {
                backgroundColor: theme.colors.surface,
                borderRadius: theme.roundness,
              },
            ]}
          >
            <Text style={[styles.TextF4, { color: theme.colors.strong }]}>
              {'Enjoy the head start!'}
            </Text>

            <Text style={[styles.TextJa, { color: theme.colors.medium }]}>
              {
                'Use these screens to quickly iterate on your idea. To update a component, select an element on the canvas or in the component tree on the left, and make your changes to Styles, Configs, Data, or Actions on the right. '
              }
            </Text>

            <Button
              onPress={() => {
                try {
                  navigation.navigate('ListScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Buttonuv}
              type={'solid'}
            >
              {'Check Out Your App →'}
            </Button>

            <Text style={[styles.TexthT, { color: theme.colors.light }]}>
              {"You can delete this screen when you're ready."}
            </Text>
          </View>
        </View>
        <View pointerEvents={'auto'} />
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundzD: {
    width: '100%',
    height: '100%',
  },
  Viewpj: {
    justifyContent: 'center',
    opacity: 0.75,
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingTop: 18,
  },
  ViewU5: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'flex-end',
  },
  TextF4: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextJa: {
    lineHeight: 21,
    fontSize: 15,
  },
  Buttonuv: {
    marginTop: 18,
  },
  TexthT: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_3a: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    maxWidth: 400,
    opacity: 1,
    paddingBottom: 18,
  },
  ViewOn: {
    marginLeft: 12,
    marginRight: 12,
    flexGrow: 1,
    flexShrink: 0,
  },
  ImageBackgrounds1: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(WelcomeScreen);
