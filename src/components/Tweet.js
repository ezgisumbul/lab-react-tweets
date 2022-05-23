import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img src={props.tweet.user.image} className="profile" alt="profile" /> */}
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.name}</span>
            <span className="handle">@{props.handle}</span>
          </span> */}
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
