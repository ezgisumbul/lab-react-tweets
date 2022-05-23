function ProfileImage(props) {
  return (
    <img
      //   src="https://i.imgur.com/b0EdHVV.jpg"
      src={props.image}
      className="profile"
      alt="profile"
    />

    // <div className="profile">
    //   <img src={props.image} alt="profile" />;
    // </div>
  );
}

export default ProfileImage;
