import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.profileInfoImg}
          src="https://abrakadabra.fun/uploads/posts/2021-12/1639867698_1-abrakadabra-fun-p-figuri-png-1.png"
        />
      </div>
      <div className={s.descriptionBlock}>ava and description </div>
    </div>
  );
};

export default ProfileInfo;
