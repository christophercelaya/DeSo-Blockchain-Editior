import React from 'react';
import {
  Icon,
  ScreenContainer,
  Square,
  Stepper,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const HomepageGridScreen = props => {
  const { theme } = props;

  const [stepperValue, setStepperValue] = React.useState(0);

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={[
          styles.KeyboardAvoidingViewNN,
          { backgroundColor: theme.colors.custom_rgba141_141_141_0 },
        ]}
        behavior={'position'}
        keyboardVerticalOffset={44}
        enabled={false}
      >
        <View style={styles.ViewUq}>
          <Text
            style={[
              theme.typography.headline4,
              styles.Textz2,
              { color: theme.colors.strong },
            ]}
          >
            {null}
            {'DeSo Identity API'}
          </Text>

          <View style={styles.ViewZv}>
            <Text
              style={[
                theme.typography.headline5,
                { color: theme.colors.strong },
              ]}
              ellipsizeMode={'tail'}
              textBreakStrategy={'highQuality'}
              allowFontScaling={true}
            >
              {'메뉴'}
            </Text>

            <Touchable style={styles.TouchableeE}>
              <Text
                style={[
                  theme.typography.headline5,
                  { color: theme.colors.primary },
                ]}
                ellipsizeMode={'tail'}
                allowFontScaling={true}
                textBreakStrategy={'highQuality'}
              >
                {'See All'}
              </Text>
            </Touchable>
          </View>
          <Stepper
            onChange={stepperValue => {
              try {
                setStepperValue(stepperValue);
              } catch (err) {
                console.error(err);
              }
            }}
            iconSize={24}
            iconColor={theme.colors.strong}
            value={stepperValue}
          />
        </View>

        <View style={styles.ViewKU} needsOffscreenAlphaCompositing={false}>
          <Touchable style={styles.Touchablecp}>
            <View
              style={[
                styles.ViewMC,
                {
                  borderRadius: theme.roundness,
                  borderColor: theme.colors.divider,
                  backgroundColor: theme.colors.background,
                },
              ]}
            >
              <View style={styles.ViewrS}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextFC,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                >
                  {'To Do'}
                </Text>

                <Text
                  style={[
                    theme.typography.subtitle1,
                    styles.Texth8,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                >
                  {'Description'}
                </Text>
              </View>
              <View style={styles.Viewcp}>
                <Icon
                  style={styles.Icong7}
                  size={24}
                  color={theme.colors.strong}
                  name={'Entypo/bar-graph'}
                />
              </View>
              null
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_7I}>
            <View
              style={[
                styles.ViewrV,
                {
                  borderColor: theme.colors.divider,
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <View style={styles.View_1W}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TexteL,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                >
                  {'Title'}
                </Text>

                <Text
                  style={[
                    theme.typography.subtitle1,
                    styles.Textaz,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                >
                  {'Description'}
                </Text>
              </View>

              <View style={styles.View_6C}>
                <Icon
                  style={styles.Iconql}
                  color={theme.colors.strong}
                  size={24}
                  name={'AntDesign/heart'}
                />
              </View>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableFv}>
            <View
              style={[
                styles.Viewnu,
                {
                  borderColor: theme.colors.divider,
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <View style={styles.View_92}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextZR,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                >
                  {'Send Pool to Friends'}
                </Text>

                <Text
                  style={[
                    theme.typography.subtitle1,
                    styles.TextKv,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                >
                  {'Description'}
                </Text>
              </View>

              <View style={styles.Viewtw}>
                <Icon
                  style={styles.IcontK}
                  color={theme.colors.strong}
                  size={24}
                  name={'Foundation/plus'}
                />
              </View>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableD9}>
            <View
              style={[
                styles.View_4H,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <View style={styles.ViewmA}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextRc,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                >
                  {'Title'}
                </Text>

                <Text
                  style={[
                    theme.typography.subtitle1,
                    styles.Textwy,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                >
                  {'Description'}
                </Text>
              </View>

              <View style={styles.Viewwc}>
                <Icon
                  style={styles.Icond8}
                  size={24}
                  name={'Ionicons/ios-body'}
                  color={theme.colors.strong}
                />
              </View>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableOL}>
            <View
              style={[
                styles.ViewP0,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <View style={styles.View_4C}>
                <Text
                  style={[
                    theme.typography.headline6,
                    styles.TextEz,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                >
                  {'Title'}
                </Text>

                <Text
                  style={[
                    theme.typography.subtitle1,
                    styles.Textv4,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                >
                  {'Description'}
                </Text>
              </View>

              <View style={styles.ViewIV}>
                <Icon
                  style={styles.IconQI}
                  size={24}
                  name={'MaterialCommunityIcons/power-sleep'}
                  color={theme.colors.strong}
                />
              </View>
            </View>
          </Touchable>
          <ScrollView
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            bounces={true}
          />
          <Square size={50} bgColor={theme.colors.light} />
          <Square size={50} bgColor={theme.colors.light} />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textz2: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  TouchableeE: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  ViewZv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
    marginBottom: 14,
  },
  ViewUq: {
    paddingTop: 32,
    alignItems: 'flex-start',
    paddingBottom: 14,
    paddingLeft: 32,
    paddingRight: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  TextFC: {
    textAlign: 'left',
  },
  Texth8: {
    textAlign: 'left',
  },
  ViewrS: {
    marginBottom: 24,
  },
  Icong7: {
    width: 24,
    height: 24,
  },
  Viewcp: {
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
  },
  ViewMC: {
    width: '100%',
    height: 140,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  Touchablecp: {
    width: '45%',
    marginBottom: 14,
    marginTop: 14,
    alignSelf: 'stretch',
  },
  TexteL: {
    textAlign: 'left',
  },
  Textaz: {
    textAlign: 'left',
  },
  View_1W: {
    marginBottom: 24,
  },
  Iconql: {
    height: 24,
    width: 24,
  },
  View_6C: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignItems: 'center',
  },
  ViewrV: {
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
  },
  Touchable_7I: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  TextZR: {
    textAlign: 'left',
  },
  TextKv: {
    textAlign: 'left',
  },
  View_92: {
    marginBottom: 24,
  },
  IcontK: {
    height: 24,
    width: 24,
  },
  Viewtw: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignItems: 'center',
  },
  Viewnu: {
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
  },
  TouchableFv: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  TextRc: {
    textAlign: 'left',
  },
  Textwy: {
    textAlign: 'left',
  },
  ViewmA: {
    marginBottom: 24,
  },
  Icond8: {
    height: 24,
    width: 24,
  },
  Viewwc: {
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
  },
  View_4H: {
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 14,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  TouchableD9: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  TextEz: {
    textAlign: 'left',
  },
  Textv4: {
    textAlign: 'left',
  },
  View_4C: {
    marginBottom: 24,
  },
  IconQI: {
    width: 24,
    height: 24,
  },
  ViewIV: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignItems: 'center',
  },
  ViewP0: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 14,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    paddingLeft: 14,
    height: 140,
    width: '100%',
    borderRightWidth: 1,
  },
  TouchableOL: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
  },
  ViewKU: {
    justifyContent: 'space-between',
    paddingLeft: 32,
    alignItems: 'flex-start',
    paddingRight: 32,
    flexWrap: 'wrap',
    paddingBottom: 72,
    flexDirection: 'row',
  },
  KeyboardAvoidingViewNN: {
    flexGrow: 1,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
});

export default withTheme(HomepageGridScreen);
