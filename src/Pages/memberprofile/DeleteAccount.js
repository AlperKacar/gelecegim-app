import { Helmet } from "react-helmet";
import MainMenu from "../../Components/ProfileMenu";
import { MemberLayout } from "./Memberprofilecss/Memmbercss";
import DeleteProfile from "../../Components/DeleteProfile";

function DeleteAccount() {
  return (
    <>
      <Helmet>
        <title> DeleteAccount</title>
      </Helmet>
      <MemberLayout>
        <div>
          <MainMenu />
        </div>
        <div>
          <DeleteProfile />
        </div>
      </MemberLayout>
    </>
  );
}

export default DeleteAccount;
