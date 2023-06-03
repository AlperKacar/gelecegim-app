import { Link } from "react-router-dom";
import { VitrinList } from "./ComponentCss/SingleIlancss";

const SingleIlan = ({ ilan }) => {
  const encodedBaslik = encodeURIComponent(ilan.baslik);
  const formattedBaslik = encodedBaslik.replace(/%20/g, "-");
  let resimURL=ilan.images[0];
  const uploadPath = "upload/";
  const newUploadPath = "c_fill,h_65,q_90,w_65,x_0,y_0";
  resimURL=resimURL.replace(uploadPath, `${uploadPath}${newUploadPath}/`)
  
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
                src={resimURL}
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

export default SingleIlan;
