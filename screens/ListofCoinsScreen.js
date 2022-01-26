import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import {
  ButtonSolid,
  Divider,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ListofCoinsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.Viewux}>
        <View style={styles.ViewCe}>
          <Text
            style={[theme.typography.headline4, { color: theme.colors.strong }]}
          >
            {'Cryptocurrencies'}
          </Text>

          <Touchable style={styles.TouchableNj}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.primary },
              ]}
            >
              {'See All'}
            </Text>
          </Touchable>
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewOvContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <DraftbitExampleDataApi.FetchGETCryptoPrices782GET>
            {({ loading, error, data, doFetch }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <FlatList
                  data={data}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable>
                        <View style={styles.VieweQ}>
                          <View style={styles.ViewvJ}>
                            <View
                              style={[
                                styles.ViewWf,
                                {
                                  backgroundColor: theme.colors.divider,
                                  borderColor: theme.colors.light,
                                  borderRadius: theme.roundness,
                                },
                              ]}
                            >
                              <Text
                                style={[
                                  theme.typography.caption,
                                  { color: theme.colors.medium },
                                ]}
                              >
                                {listData?.symbol}
                              </Text>
                            </View>

                            <View style={styles.Viewwa}>
                              <Text
                                style={[
                                  theme.typography.body1,
                                  { color: theme.colors.strong },
                                ]}
                              >
                                {listData?.name}
                              </Text>

                              <View style={styles.ViewlC}>
                                <View style={styles.View_6c}>
                                  <Text>
                                    {listData && listData['%_change_1h']}
                                    {' %'}
                                  </Text>
                                </View>

                                <View style={styles.ViewI1}>
                                  <Text
                                    style={[
                                      theme.typography.caption,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData && listData['%_change_24h']}
                                    {' % (24H)'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>

                          <View style={styles.View_1h}>
                            <Text
                              style={[
                                theme.typography.body2,
                                { color: theme.colors.primary },
                              ]}
                            >
                              {'$'}
                            </Text>

                            <Text
                              style={[
                                theme.typography.body2,
                                { color: theme.colors.primary },
                              ]}
                            >
                              {listData?.price}
                            </Text>
                          </View>
                        </View>
                        <Divider
                          style={styles.Divider_8l}
                          height={1}
                          color={theme.colors.divider}
                        />
                      </Touchable>
                    );
                  }}
                  contentContainerStyle={styles.FlatListQbContent}
                  numColumns={1}
                  data={data}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchGETCryptoPrices782GET>
        </ScrollView>

        <View style={styles.ViewdS} pointerEvents={'auto'}>
          <ButtonSolid
            style={[
              styles.ButtonSolidhf,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Get Started'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TouchableNj: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewCe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  ViewWf: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
  },
  View_6c: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewI1: {
    alignItems: 'center',
    marginRight: 18,
    flexDirection: 'row',
  },
  ViewlC: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  Viewwa: {
    alignSelf: 'stretch',
  },
  ViewvJ: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  View_1h: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  VieweQ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  Divider_8l: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  FlatListQbContent: {
    flex: 1,
  },
  ScrollViewOvContent: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  ButtonSolidhf: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewdS: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
  },
  Viewux: {
    paddingBottom: 16,
    paddingTop: 34,
    paddingTop: 32,
    flex: 1,
  },
});

export default withTheme(ListofCoinsScreen);
