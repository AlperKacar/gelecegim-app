import { Helmet } from "react-helmet";
import InputValidation from "../../../Components/InputValidation";
import SelectValidation from "../../../Components/SelectValidation";
import { useState } from "react";
import { Container } from "../IlanVerComponentCss/IlanBilgileriCss";
import { Button, Form, Radio, Input, DatePicker, Select } from "antd";
import FileBase64 from "react-file-base64";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import IlcelerVd from "../../../Components/IlcelerVd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../store/userInformation";
function IlanBilgileri({ secilen }) {
  const posturl = "http://localhost:3001/ilanver/yeni";

  const { token } = useSelector((state) => state.userInformation);

  const [form] = Form.useForm();
  const [baslik, setBaslik] = useState("");
  const [brans, setBrans] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [ucret, setUcret] = useState("");
  const [taksit, setTaksit] = useState("");
  const [egitmenSayisi, setEgitmenSayisi] = useState("");
  const [sertifika, setSertifika] = useState("");
  const [kursBaslama, setkursBaslama] = useState([]);
  const [kursBitis, setkursBitis] = useState([]);
  const [ilanSure, setİlanSure] = useState("");
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [images, setImages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  const disablePastDates = (current) => {
    return current && current < dayjs().endOf("day");
  };
  const handleFileUpload = (files) => {
    const imageFiles = files.map((file) => file.file);

    setImages(imageFiles);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    images.forEach((image) => {
      formData.append(`images`, image);
    });
    formData.append("secilen", secilen);
    formData.append("baslik", baslik);
    formData.append("brans", brans);
    formData.append("aciklama", aciklama);
    formData.append("ucret", ucret);
    formData.append("taksit", taksit);
    formData.append("egitmenSayisi", egitmenSayisi);
    formData.append("sertifika", sertifika);
    formData.append("kursBaslama", kursBaslama);
    formData.append("kursBitis", kursBitis);
    formData.append("il", il);
    formData.append("ilce", ilce);
    formData.append("ilanSure", ilanSure);
    console.log(formData);
    try {
      const res = await axios.post(posturl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("İlan Başarıyla oluşturuldu.");

      setTimeout(() => {
        // İlan oluşturulduktan sonra yapılacak işlemler
        dispatch(setPosts(res));
        navigate(location.state?.return_url || "/", {
          replace: true,
        });
      }, 1500);
    } catch (error) {
      toast.error("İlan Oluşturulamadı.");
      console.error(error);
    } finally {
    }
  };

  return (
    <>
      <Helmet>
        <title>İlan Ver</title>
      </Helmet>

      <Container>
        <div className="business-center-colum">
          <div className="form-corporate">
            <div className="registration-corporate">
              <Form
                // autoComplete="off"

                form={form}
                name="dynamic_rule"
              >
                <div className="form-container">
                  <label className="labels">İlan Başlığı </label>

                  <Form.Item
                    name="Baslik"
                    onChange={(e) => setBaslik(e.target.value)}
                    rules={[
                      {
                        required: true,
                        message: "Lütfen ilanınıza bir başlık giriniz!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <InputValidation
                      type="text"
                      className="form-input baslik"
                      value={baslik}
                    />
                  </Form.Item>
                  <label className="labels">Açıklama</label>
                  <Form.Item
                    name="aciklama"
                    rules={[
                      {
                        required: true,
                        message: "Lütfen ilanınıza bir açıklama giriniz!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <TextArea
                      className="text-area"
                      value={aciklama}
                      showCount
                      maxLength={1400}
                      style={{ height: 120, marginBottom: 24 }}
                      onChange={(e) => setAciklama(e.target.value)}
                    />
                  </Form.Item>
                  <div className="yanyana">
                    <label className="labels">Fiyat</label>

                    <Form.Item
                      name="fiyat"
                      rules={[
                        {
                          type: "price",
                          message: "Geçerli Bir Fiyat Giriniz!",
                        },
                        {
                          required: true,
                          message: "Lütfen Fiyatı giriniz!",
                        },
                        {
                          whitespace: true,
                          message: "Boşluk içeremez!",
                        },
                      ]}
                    >
                      <InputValidation
                        value={ucret}
                        className="form-input inputs"
                        onChange={(e) => setUcret(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                  <div className="tasi">
                    <label className="labels">Eğitmen Sayısı</label>
                    <Form.Item
                      name="egitmen_sayisi"
                      rules={[
                        {
                          required: true,
                          message: "Lütfen Eğitmen Sayısı Bilgisini Girin!",
                        },
                        {
                          whitespace: true,
                          message: "Boşluk içeremez!",
                        },
                      ]}
                    >
                      <InputValidation
                        className="form-input inputs"
                        type="text"
                        value={egitmenSayisi}
                        onChange={(e) => setEgitmenSayisi(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                  <label className="labels">İlan branşı</label>

                  <Form.Item
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <IlcelerVd
                      className="selects"
                      size="large"
                      value={brans}
                      il={secilen}
                      getir="altAlan"
                      onChange={(e) => setBrans(e)}
                    />
                  </Form.Item>

                  <label className="labels">Kurum İli</label>
                  <Form.Item>
                    <SelectValidation
                      className="selects"
                      size="large"
                      value={il}
                      getir="Iller"
                      onChange={(o) => setIl(o)}
                    />
                  </Form.Item>
                  <label className="labels">Kurum İlçesi</label>
                  <Form.Item>
                    <IlcelerVd
                      className="selects"
                      size="large"
                      value={ilce}
                      il={il}
                      getir="Ilceler"
                      onChange={(o) => setIlce(o)}
                    />
                  </Form.Item>

                  <label className="labels">Taksit İmkanı?</label>
                  <Radio.Group
                    className="form-radio"
                    value={taksit}
                    onChange={(e) => {
                      setTaksit(e.target.value);
                    }}
                  >
                    <Radio value={"Evet"}>Evet</Radio>
                    <Radio value={"Hayır"}>Hayır</Radio>
                  </Radio.Group>

                  <label className="labels">Sertifikalı mı?</label>

                  <Radio.Group
                    className="form-radio"
                    value={sertifika}
                    onChange={(e) => {
                      setSertifika(e.target.value);
                    }}
                  >
                    <Radio value={"Evet"}>Evet</Radio>
                    <Radio value={"Hayır"}>Hayır</Radio>
                  </Radio.Group>

                  <label className="labels">İlan Yayın Süresi</label>
                  <Form.Item>
                    <Select
                      defaultValue="seçiniz"
                      size="large"
                      style={{ width: 240 }}
                      value={ilanSure}
                      onChange={(o) => setİlanSure(o)}
                      options={[
                        { value: 30, label: "1 Ay" },
                        { value: 90, label: "3 Ay" },
                        { value: 180, label: "6 Ay" },
                        { value: 365, label: "1 Yıl" },
                        { value: 1095, label: "3 Yıl" },
                        { value: 1825, label: "5 Yıl" },
                      ]}
                    />
                  </Form.Item>
                  <label className="labels">
                    Kurs
                    Başlangıç&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bitiş
                    Tarihi
                  </label>

                  <Form.Item>
                    <RangePicker
                      allowClear="false"
                      format="DD/MM/YYYY"
                      size="large"
                      onChange={(date) => {
                        setkursBaslama(dayjs(date[0]).format("DD/MM/YYYY"));
                        setkursBitis(dayjs(date[1]).format("DD/MM/YYYY"));
                      }}
                      disabledDate={disablePastDates}
                    />
                  </Form.Item>
                  <div>
                    <FileBase64 multiple={true} onDone={handleFileUpload} />
                    {images.map((image, index) => (
                      <div key={index}>
                        <img src={image.base64} alt="Preview" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-extra-container">
                  <div className="extra-text-wrapper">
                    <div className="eula-and-button">
                      <div className="sign-up-container ">
                        <Form.Item className="Form-button" shouldUpdate>
                          {() => (
                            <Button
                              onClick={handleSubmit}
                              className="Button"
                              type="primary"
                            >
                              <Link>İlan Ver</Link>
                            </Button>
                          )}
                        </Form.Item>
                      </div>
                      <div className="kvkk">
                        <p>
                          Not: Bu sayfadaki bilgilerin doğruluğundan işletme
                          sorumludur. Geleceğim.com yanlış bilgi verilen
                          ilanlarla ilgili sorumluluk almaz.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="captcha-disclaimer ">
                    Bu site reCAPTCHA ile korunmaktadır. Google{" "}
                    <Link to="https://policies.google.com/privacy">
                      Gizlilik Politikası
                    </Link>{" "}
                    ve{" "}
                    <Link to="https://policies.google.com/terms">
                      Kullanım Koşulları
                    </Link>{" "}
                    geçerlidir.
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default IlanBilgileri;
