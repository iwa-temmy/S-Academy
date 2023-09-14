import { Avatar } from "@mui/material";
const UserAvatar = (props) => {
  const { src, variant, size } = props;
  return (
    <Avatar
      src={src || "/img/userCircleOutline.svg"}
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
      }}
      alt="profile picture"
      variant={variant}
    />
  );
};

export default UserAvatar;
