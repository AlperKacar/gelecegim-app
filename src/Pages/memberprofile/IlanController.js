import { Helmet } from "react-helmet";
import MainMenu from "../../Components/ProfileMenu";
import EditIlan from "../../Components/EditIlan";
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
          <EditIlan />
        </div>
      </MemberLayout>
    </>
  );
}

export default Profile;
