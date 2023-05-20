import { Helmet } from "react-helmet";
import MainMenu from "../../Components/ProfileMenu";
import { MemberLayout } from "./Memberprofilecss/Memmbercss";
import EditPassword from "../../Components/EditPassword";

function ChangePassword() {
  return (
    <>
      <Helmet>
        <title>ChangePassword</title>
      </Helmet>
      <MemberLayout>
        <div>
          <MainMenu />
        </div>
        <div>
          <EditPassword />
        </div>
      </MemberLayout>
    </>
  );
}

export default ChangePassword;
