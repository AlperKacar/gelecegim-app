import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { Form, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  FormItemButton,
  FormDisplayColumn,
  UploadContainer,
  StyledButton,
  StyledInput,
  FormLabel,
  FormItemContainer,
  Title,
  EditProfileContainer,
  FormDisplayFlex,
} from "./ComponentCss/EditProfilecss";
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
const EditProfile = () => {
  const { token, user } = useSelector((state) => state.userInformation);
  const [form] = Form.useForm();
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [hesapTuru, setHesapTuru] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewFile(file.url);
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleEdit = () => {
    setEditMode(true);
  };
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3001/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const user = response.data;
        const defaultProfileImage = user.profileImage.path
          ? user.profileImage.path
          : user.defaultProfileImage;
        if (!defaultProfileImage.startsWith("http")) {
          setFileList([
            {
              url: `http://localhost:3001/${defaultProfileImage}`,
            },
          ]);
        } else {
          setFileList([
            {
              url: defaultProfileImage,
            },
          ]);
        }

        setHesapTuru(user.hesapTuru);
        form.setFieldsValue({
          name: user.name,
          surname: user.surname,
          email: user.email,
          business: user.business,
          vdil: user.vdil,
          vdad: user.vdad,
          phone: user.phone,
          il: user.il,
          ilce: user.ilce,
          vkNo: user.vkNo,
          tcno: user.tcno,
        });
        setLoading(false);
      } catch {}
    };
    fetchUserProfile();
  }, [token, form]);
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const { name, surname } = values;
      // Create a new FormData object
      const formData = new FormData();
      formData.append("name", name.charAt(0).toUpperCase() + name.slice(1));
      formData.append(
        "surname",
        surname.charAt(0).toUpperCase() + surname.slice(1)
      );

      // Append the new profile picture to the FormData if available
      if (fileList.length > 0) {
        const file = fileList[0].originFileObj;
        formData.append("image", file);
      }

      await axios.post("http://localhost:3001/profile/controller", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Profil güncellendi.");
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
      setEditMode(false);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
  };
  const handleRemoveImage = async () => {
    try {
      await axios.delete("http://localhost:3001/profile/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Resmi başarıyla sildiğinizde yapılması gereken işlemler
      setFileList([]);
      toast.success("Resim başarıyla silindi.");
    } catch (error) {
      toast.error(error);
    }
  };
  if (loading) {
    return;
  }

  return (
    <EditProfileContainer>
      <Title>Profil Düzenle</Title>
      <Form form={form} layout="vertical">
        <FormDisplayFlex>
          <FormDisplayColumn>
            <FormItemContainer>
              <FormLabel>İsim:</FormLabel>
              <Form.Item name="name">
                <StyledInput className="form-input" disabled={!editMode} />
              </Form.Item>
              <FormLabel>Soyisim:</FormLabel>
              <Form.Item name="surname">
                <StyledInput className="form-input" disabled={!editMode} />
              </Form.Item>
            </FormItemContainer>
            <FormItemContainer>
              <FormLabel>E-mail:</FormLabel>
              <Form.Item name="email">
                <StyledInput className="form-input" disabled />
              </Form.Item>
            </FormItemContainer>
            {user !== "Bireysel" && (
              <>
                <FormItemContainer>
                  <FormLabel>Vergi Dairesi:</FormLabel>
                  <Form.Item name="vdil">
                    <StyledInput className="form-input" disabled />
                  </Form.Item>
                  <FormLabel>Vergi Dairesi Adı:</FormLabel>
                  <Form.Item name="vdad">
                    <StyledInput className="form-input" disabled />
                  </Form.Item>
                </FormItemContainer>
                <FormItemContainer>
                  <FormLabel>Telefon Numarası:</FormLabel>
                  <Form.Item name="phone">
                    <StyledInput className="form-input" disabled />
                  </Form.Item>
                  <FormLabel>İl:</FormLabel>
                  <Form.Item name="il">
                    <StyledInput className="form-input" disabled />
                  </Form.Item>
                </FormItemContainer>
                <FormItemContainer>
                  <FormLabel>İlçe:</FormLabel>
                  <Form.Item name="ilce">
                    <StyledInput className="form-input" disabled />
                  </Form.Item>
                  <FormLabel>Vergi Kimlik No:</FormLabel>
                  <Form.Item name="vkNo">
                    <StyledInput className="form-input" disabled />
                  </Form.Item>
                </FormItemContainer>
                <FormItemContainer>
                  <FormLabel>Kurum Alanı:</FormLabel>
                  <Form.Item name="business">
                    <StyledInput className="form-input" disabled />
                  </Form.Item>
                  {user !== "Şahıs Şirketi" && (
                    <>
                      <FormLabel>TC Kimlik No:</FormLabel>
                      <Form.Item name="tcno">
                        <StyledInput className="form-input" disabled />
                      </Form.Item>
                    </>
                  )}
                </FormItemContainer>
              </>
            )}
          </FormDisplayColumn>
          <UploadContainer>
            <Upload
              action={`http://localhost:3001/api/upload`}
              headers={{
                Authorization: `Bearer ${token}`,
              }}
              name="image"
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              onRemove={handleRemoveImage}
              showUploadList={{
                showRemoveIcon: editMode,
              }}
            >
              {fileList.length >= 1 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>

            <Modal
              open={previewVisible}
              footer={null}
              onCancel={() => setPreviewVisible(false)}
            >
              <img
                alt="Profile Resmi"
                style={{
                  width: "100%",
                }}
                src={previewFile}
              />
            </Modal>
          </UploadContainer>
        </FormDisplayFlex>
        {editMode ? (
          <FormItemButton>
            <StyledButton
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
            >
              Kaydet
            </StyledButton>
            <StyledButton onClick={handleCancel}>İptal</StyledButton>
          </FormItemButton>
        ) : (
          <FormItemButton>
            <StyledButton onClick={handleEdit}>Düzenle</StyledButton>
          </FormItemButton>
        )}
      </Form>
    </EditProfileContainer>
  );
};

export default EditProfile;
