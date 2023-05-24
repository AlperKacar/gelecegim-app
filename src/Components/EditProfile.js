import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { Form, Input, Button, Upload, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { setProfile } from "../store/userInformation";
import { Profile } from "./ComponentCss/EditProfilecss";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const EditProfile = () => {
  const user = useSelector(
    (state) => state.userInformation.user.data.existingUser
  );
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [il, setIl] = useState(user.il);
  const [ilce, setIlce] = useState(user.ilce);
  const [vdil, setVdil] = useState(user.vdil);
  const [vdad, setVdad] = useState(user.vdad);
  const [tcno, setTcno] = useState(user.tcno);
  const [vkNo, setVkNo] = useState(user.vkNo);
  const [hesapTuru, setHesapTuru] = useState(user.hesapTuru);
  const [email] = useState(user.email);
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [editMode, setEditMode] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  useEffect(() => {
    // Profil bilgilerini doldur
    setName(user.name);
    setSurname(user.surname);
  }, [user]);

  useEffect(() => {
    // Profil resmini yükle
    setFileList([
      {
        uid: "1",
        name: "user.png",
        status: "done",
        url: user.profileImage || user.defaultProfileImage,
      },
    ]);
  }, [user.profileImage, user.defaultProfileImage]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = async (values) => {
    try {
      // Dosya varsa, base64 formatına dönüştürüp sunucuya gönder
      if (fileList && fileList.length > 0) {
        const formData = new FormData();
        formData.append("file", fileList[0].originFileObj);

        const uploadResponse = await axios.post(
          "http://localhost:3001/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Yüklendikten sonra sunucudan gelen resim URL'sini kullanarak profil güncelleme işlemi yap
        const response = await axios.post(
          "http://localhost:3001/profile/controller",
          {
            email,
            name: name.charAt(0).toUpperCase() + name.slice(1),
            surname: surname.charAt(0).toUpperCase() + surname.slice(1),
            profileImage: uploadResponse.data.fileUrl,
          }
        );

        dispatch(setProfile(response));
        toast.success("Profil güncellendi.");
        setEditMode(false);
      } else {
        // Dosya seçilmemişse, sadece diğer profil bilgilerini güncelle
        const response = await axios.post(
          "http://localhost:3001/profile/controller",
          {
            email,
            name: name.charAt(0).toUpperCase() + name.slice(1),
            surname: surname.charAt(0).toUpperCase() + surname.slice(1),
          }
        );

        dispatch(setProfile(response));
        toast.success("Profil güncellendi.");
        setEditMode(false);
      }
    } catch (error) {
      toast.error("Profil güncellenirken bir hata oluştu.");
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setEditMode(false);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div className="ant-upload-text">Resim Yükle</div>
    </div>
  );

  return (
    <Profile>
      <h2 className="profile-h2">Profil Düzenle</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="profile-form"
      >
        <div className="form-margin margin-20px">
          <div className="split-profile-info">
            <div className="display-flex">
              <Form.Item
                name="name"
                label={<label style={{ color: "red" }}>Isim</label>}
                initialValue={user.name}
              >
                <Input
                  className="form-input"
                  disabled={!editMode}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="surname"
                label={<label style={{ color: "red" }}>Soyisim</label>}
                initialValue={user.surname}
              >
                <Input
                  className="form-input"
                  disabled={!editMode}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Form.Item>
            </div>
            <Form.Item
              name="email"
              label={<label style={{ color: "red" }}>E-mail</label>}
              initialValue={user.email}
            >
              <Input disabled className="form-input" />
            </Form.Item>
            <Form.Item
              className={user.phone ? "" : "display-none"}
              name="phone"
              label={<label style={{ color: "red" }}>Telefon</label>}
              initialValue={user.phone}
            >
              <Input disabled className="form-input" />
            </Form.Item>
            <div className="display-flex">
              <Form.Item
                className={user.il ? "" : "display-none"}
                name="il"
                label={<label style={{ color: "red" }}>il</label>}
                initialValue={user.il}
              >
                <Input disabled className="form-input" />
              </Form.Item>
              <Form.Item
                className={user.ilce ? "" : "display-none"}
                name="ilce"
                label={<label style={{ color: "red" }}>ilçe</label>}
                initialValue={user.ilce}
              >
                <Input disabled className="form-input" />
              </Form.Item>
            </div>
            <div className="display-flex">
              <Form.Item
                className={user.vdil ? "" : "display-none"}
                name="vdil"
                label={
                  <label style={{ color: "red" }}>vergi dairesi ili</label>
                }
                initialValue={user.vdil}
              >
                <Input disabled className="form-input" />
              </Form.Item>
              <Form.Item
                className={user.vdad ? "" : "display-none"}
                name="vdad"
                label={
                  <label style={{ color: "red" }}>vergi dairesi adı</label>
                }
                initialValue={user.vdad}
              >
                <Input disabled className="form-input" />
              </Form.Item>
            </div>
            <div className="display-flex">
              <Form.Item
                className={user.tcno ? "" : "display-none"}
                name="tcno"
                label={<label style={{ color: "red" }}>Tc NUMARASI</label>}
                initialValue={user.tcno}
              >
                <Input disabled className="form-input" />
              </Form.Item>
              <Form.Item
                className={user.vkNo ? "" : "display-none"}
                name="vkNo"
                label={<label style={{ color: "red" }}>vergi KİMLİK NO</label>}
                initialValue={user.vkNo}
              >
                <Input disabled className="form-input" />
              </Form.Item>
            </div>
          </div>

          <div className="profile-upload">
            <Form.Item
              label={<label style={{ color: "red" }}>Profil Fotoğrafı</label>}
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                disabled={!editMode}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={() => setPreviewOpen(false)}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>
          </div>
        </div>
        <div className="form-button flex-jc-end">
          {!editMode && (
            <Form.Item>
              <Button type="primary" onClick={handleEdit}>
                Düzenle
              </Button>
            </Form.Item>
          )}
          {editMode && (
            <Form.Item>
              <Button type="primary" onClick={handleSubmit}>
                Kaydet
              </Button>
              <Button onClick={handleCancel}>İptal</Button>
            </Form.Item>
          )}
        </div>
      </Form>
    </Profile>
  );
};

export default EditProfile;
