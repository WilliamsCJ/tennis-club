import { React, useState } from 'react';

import NavBar from '../components/Navbar';
import Notification from '../components/notifications/Notification';
import { NotificationContext } from '../components/notifications/NotificationContext';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [closeable, setCloseable] = useState(false);

  return (
    <NotificationContext.Provider 
      value={{
        isError: isError,
        setIsError: setIsError,
        message: message,
        setMessage: setMessage,
        show: show,
        setShow: setShow,
        closeable: closeable,
        setCloseable: setCloseable
      }}
    >
      <div className='bg-gray-200 min-h-screen overflow-hidden relative'>
        <NavBar />
        <Component {...pageProps} />
      </div>

      <Notification/>
    </NotificationContext.Provider>
  )
}

export default MyApp
