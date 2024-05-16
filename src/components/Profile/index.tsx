import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LogoutButton, ProfileContainer, ProfilePhoto } from "./style";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { handleLogout, userProfile } = useContext(AuthContext);
  return (
    <ProfileContainer>
      {userProfile?.profileImage !== "" ? (
        <ProfilePhoto imageUrl={userProfile?.profileImage || null} />
      ) : (
        <FaUserCircle size={55} color="#FFF" />
      )}
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
    </ProfileContainer>
  );
};

export default Profile;
