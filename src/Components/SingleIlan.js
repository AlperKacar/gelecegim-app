import { Link } from "react-router-dom";
import { VitrinList } from "./ComponentCss/SingleIlancss";

const SingleUser = ({ ilan }) => {
  const encodedBaslik = encodeURIComponent(ilan.baslik);
  const formattedBaslik = encodedBaslik.replace(/%20/g, "-");

  return (
    <>
      <VitrinList>
        <Link
          className="link"
          to={`/ilan/${formattedBaslik}=${ilan.ilan_no}/detay`}
        >
          <div className="VitrinList-Flex">
            <div className="VitrinImg">
              <img
                src={ilan.images[0]}
                alt="resim"
                style={{ width: 65, height: 65 }}
              />
            </div>

            <div className="VitrinList-Column">
              <p className="VitrinList-Baslik taşanları-gizle">{ilan.baslik}</p>
              <p className="VitrinList-AltKategori taşanları-gizle">
                {ilan.alt_kategori}
              </p>
              <p className="VitrinList-Konum taşanları-gizle">
                {ilan.konum_il}
              </p>
              <p className="VitrinList-Konum taşanları-gizle">
                {ilan.konum_ilce}
              </p>
            </div>
          </div>
        </Link>
      </VitrinList>
    </>
  );
};

export default SingleUser;
