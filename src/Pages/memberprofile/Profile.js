import { Helmet } from "react-helmet";
import MainMenu from "../../Components/ProfileMenu";
import EditProfile from "../../Components/EditProfile";
import { MemberLayout } from "./Memberprofilecss/Memmbercss";

function Profile() {
  return (
    <>
      <Helmet>
        <title> Profile</title>
      </Helmet>
      <MemberLayout>
        <div>
          <MainMenu />
        </div>
        <div>
          <EditProfile />
        </div>
      </MemberLayout>
    </>
  );
}

export default Profile;
