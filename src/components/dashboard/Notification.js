import React from 'react';
import moment from "moment";

export default (props) => {
  const {notifications} = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications && notifications.map((notification, index) => {
              return (
                <li key={index}>
                  <span className="teal-text lighten-2">{notification.user}</span>
                  <span>{notification.content}</span>
                  <div className="grey-text">
                    {moment(notification.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}