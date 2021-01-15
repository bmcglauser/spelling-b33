import React, { FunctionComponent } from 'react';
import './MessageDisplay.scss';
import { IMessageInfo } from '../../App';

interface MessageDisplayProps {
  messageInfo: IMessageInfo;
}

const MessageDisplay: FunctionComponent<MessageDisplayProps> = ({
  messageInfo
}) => {
  const { displayMessage, type, recentPoints } = messageInfo;

  let messageText = '';
  switch (type) {
    case 'tooshort':
      messageText = 'Word must be at least 4 letters in length';
      break;
    case 'goodword':
      messageText = `Good word! ${recentPoints} point${
        recentPoints === 1 ? '' : 's'
      } added`;
      break;
    case 'centerrequired':
      messageText = 'Words must all use the center letter';
      break;
    case 'notaword':
      messageText = 'Word not found';
      break;
    default:
      messageText = '';
  }

  return (
    <p className={`message-text ${type === 'goodword' ? '' : 'error-message'}`}>
      {displayMessage ? messageText : ''}
    </p>
  );
};

export default MessageDisplay;
