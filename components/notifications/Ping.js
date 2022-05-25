import { React } from 'react';

/**
 * Notification ping.
 * From example at: https://tailwindcss.com/docs/animation#ping 
 */
export default function Ping() {
  return (
    <span>
      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary-400 opacity-75"></span>
      <span className="absolute inline-flex rounded-full h-2 w-2 bg-primary-500"></span>   
    </span>
  )
}