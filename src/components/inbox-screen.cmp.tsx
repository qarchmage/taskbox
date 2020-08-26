import React from 'react';
import { connect } from 'react-redux';

interface inboxP {
    error?:string
}

export function PureInboxScreen(p:inboxP) {
  if (p.error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
    </div>
  );
}


PureInboxScreen.defaultProps = {
  error: undefined,
};

export default connect(( error:string) => error)(PureInboxScreen);
