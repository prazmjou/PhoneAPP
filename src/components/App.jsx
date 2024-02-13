/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from 'react';
import $ from 'dom7';

import { f7, App, Views, View, Toolbar, Link, LoginScreen, LoginScreenTitle } from 'framework7-react';

import routes from '../js/routes';
import { fetchCsrfToken } from '../api/csrf';
import { login } from '../api/auth';
import LoginForm from "./LoginForm";

const AppComponent = () => {
  const [activeTab, setActiveTab] = useState('today');
  const previousTab = useRef('today');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    // Fix viewport scale on mobiles
    // if ((f7.device.ios || f7.device.android) && f7.device.standalone) {
    //   const viewPortContent = document
    //     .querySelector('meta[name="viewport"]')
    //     .getAttribute('content');
    //   document
    //     .querySelector('meta[name="viewport"]')
    //     .setAttribute(
    //       'content',
    //       `${viewPortContent}, maximum-scale=1, user-scalable=no`,
    //     );
    // }
    const fetchToken = async () => {
        try {
            const token = await fetchCsrfToken();
            setCsrfToken(token);
        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }
    };

    fetchToken();
  }, []);


  // Framework7 Parameters
  const f7params = {
    name: 'App Store',
    theme: 'ios',
    routes,
    darkMode: 'auto',
    serviceWorker:
      process.env.NODE_ENV === 'production'
        ? {
            path: '/service-worker.js',
          }
        : {},
  };
  function onTabLinkClick(tab) {
    if (previousTab.current !== activeTab) {
      previousTab.current = activeTab;
      return;
    }
    if (activeTab === tab) {
      $(`#view-${tab}`)[0].f7View.router.back();
    }
    previousTab.current = tab;
  }


  // Function to handle login
  const handleLogin = (event) => {
    event.preventDefault();
    login(username, password, csrfToken)
      .then(() => {
        setIsLoggedIn(true);
        setLoginError('');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        setLoginError('Invalid username or password.');
      });
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear session data
    setIsLoggedIn(false);
  };

  // // Conditional rendering based on authentication state
  // if (!isLoggedIn) {
  //   return <LoginScreen onLogin={handleLogin} />;
  // }

  return (
    <>
    {isLoggedIn ? (
    <App {...f7params}>
      <Views tabs className="safe-areas">
        <Toolbar tabbar icons bottom>
          <Link
            onClick={() => onTabLinkClick('today')}
            tabLink="#view-today"
            tabLinkActive
            iconF7="today"
            text="Today"
          />
          <Link
            onClick={() => onTabLinkClick('alignertracking')}
            tabLink="#view-alignertracking"
            iconF7="rocket_fill"
            text="AlignerTracking"
          />
          <Link
            onClick={() => onTabLinkClick('apps')}
            tabLink="#view-apps"
            iconF7="layers_alt_fill"
            text="Labwork"
          />
          <Link
            onClick={() => onTabLinkClick('arcade')}
            tabLink="#view-arcade"
            iconF7="gamecontroller_alt_fill"
            text="Patient Tickets"
          />
          <Link
            onClick={() => onTabLinkClick('search')}
            tabLink="#view-search"
            iconF7="search"
            text="Checklists"
          />
          <Link
            onClick={() => onTabLinkClick('search')}
            tabLink="#view-search"
            iconF7="search"
            text="Search"
          />
        </Toolbar>

        <View
          id="view-today"
          onTabShow={() => setActiveTab('today')}
          main
          tab
          tabActive
          url="/today/"
        />
        <View
          id="view-alignertracking"
          onTabShow={() => setActiveTab('alignertracking')}
          tab
          url="/alignertracking/"
        />
        <View
          id="view-apps"
          onTabShow={() => setActiveTab('apps')}
          tab
          url="/apps/"
        />
        <View
          id="view-arcade"
          onTabShow={() => setActiveTab('arcade')}
          tab
          url="/arcade/"
        />
        <View
          id="view-search"
          onTabShow={() => setActiveTab('search')}
          tab
          url="/search/"
        />
      </Views>
    </App> ) : (
          <div>
        <LoginForm
          onLogin={handleLogin}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
        />
            {loginError && <div>{loginError}</div>}
            </div>
      )}
      </>
  );
};

export default AppComponent;
