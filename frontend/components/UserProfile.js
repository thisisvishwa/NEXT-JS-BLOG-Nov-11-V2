import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div id="user-profile">
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <div>
        <h3>Bookmarked Articles</h3>
        {user.bookmarks.map((article, index) => (
          <div key={index}>
            <h4>{article.title}</h4>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Subscriptions</h3>
        {user.subscriptions.map((subscription, index) => (
          <div key={index}>
            <p>{subscription.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;