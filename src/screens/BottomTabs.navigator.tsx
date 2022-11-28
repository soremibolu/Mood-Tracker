import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { History } from './History.screen';
import { Analytics } from './Analytics.screen';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/icons';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

//you can nest bottom navigators
// const BottomTabsNavigator2: React.FC = () => {
//   return (
//     <BottomTabs.Navigator>
//       <BottomTabs.Screen name="Home" component={Home} />
//       <BottomTabs.Screen name="History" component={History} />
//       <BottomTabs.Screen name="Analytics" component={Analytics} />
//     </BottomTabs.Navigator>
//   );
// };

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }
          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }
          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy class' }}
      />
      {/* implementing/defining the nested nav <BottomTabs.Screen name="Bnav" component={BottomTabsNavigator2} /> */}
    </BottomTabs.Navigator>
  );
};
