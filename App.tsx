// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashStack from './navigation/SplashStack';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import {useNavigationStore, ScreenType} from './stores/navigationStore';
import SignUpStack from './navigation/SignUpStack';
import ToDoEditStack from './navigation/ToDoEditStack';
const App = () => {
  const {currentScreen} = useNavigationStore();
  const renderScreen = () => {
    switch (currentScreen) {
      case ScreenType.Splash:
        return <SplashStack />;
      case ScreenType.Login:
        return <AuthStack />;
      case ScreenType.Home:
        return <MainStack />;
        case ScreenType.SignUp:
          return <SignUpStack />;
          case ScreenType.SignUp:
            return <SignUpStack />;
            case ScreenType.ToDoEdit:
              return <ToDoEditStack />;
            
      default:
        return <SplashStack />;
    }
  };
  return <NavigationContainer>{renderScreen()}</NavigationContainer>;
};
export default App;
