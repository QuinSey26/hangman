import React from "react";
//Notification component to display a notification message.

// Flag to determine whether to show the notification.
export default function Notification({ showNotification }) {
  return (
    <div className={`notificationContainer ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
}
