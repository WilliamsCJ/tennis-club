/**
 * NotificationContext, allows all components to access notifications state to call, close and update notifications in response to user actions.
 */
import { createContext } from 'react';

export const NotificationContext = createContext(null);