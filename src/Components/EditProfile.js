import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";

const EditProfileContainer = styled.div`
  width: 916px;
  padding: 20px;
  border-radius: 4px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  font-weight: bold;
  color: #333;
  width: 100px;
`;

const StyledInput = styled(Input)`
  max-width: 300px;
`;
const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const UploadContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
`;

const EditProfile = () => {
  const { token } = useSelector((state) => state.userInformation);
  const [hesapTuru, setHesapTuru] = useState("");
  const [form] = Form.useForm();
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
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
          profileImage: user.defaultProfileImage.path
            ? user.defaultProfileImage.path
            : user.profileImage.path,
        });
        setLoading(false);
      } catch (error) {
        console.log("Profil alınamadı:", error.message);
      }
    };
    fetchUserProfile();
  }, [token, form]);
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await axios.post(
        "http://localhost:3001/profile/controller",
        {
          email: values.email,
          name: values.name.charAt(0).toUpperCase() + values.name.slice(1),
          surname:
            values.surname.charAt(0).toUpperCase() + values.surname.slice(1),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profil güncellendi.");
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
      setEditMode(false);
    } catch (error) {
      toast.error("Profil güncellenirken bir hata oluştu.");
    }
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleImageUpload = (info) => {
    // Resim yükleme işlemini burada gerçekleştirin
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Resim Yükle</div>
    </div>
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <EditProfileContainer>
      <Title>Profil Düzenle</Title>
      <Form form={form} layout="vertical">
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

        <FormLabel>E-mail:</FormLabel>
        <Form.Item name="email">
          <StyledInput className="form-input" disabled />
        </Form.Item>
        {hesapTuru !== "Bireysel" && (
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
              {hesapTuru === "Limited veya Anonim Şirketi" && (
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

        <UploadContainer>
          <Upload
            name="profileImage"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            onChange={handleImageUpload}
            disabled={!editMode}
          >
            {form.getFieldValue("profileImage") ? (
              <img
                src={`http://localhost:3001/${form.getFieldValue(
                  "profileImage"
                )}`}
                alt="Profile"
                style={{ width: "100%" }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </UploadContainer>

        {editMode ? (
          <FormItemContainer>
            <StyledButton
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
            >
              Kaydet
            </StyledButton>
            <StyledButton onClick={handleCancel}>İptal</StyledButton>
          </FormItemContainer>
        ) : (
          <FormItemContainer>
            <StyledButton onClick={handleEdit}>Düzenle</StyledButton>
          </FormItemContainer>
        )}
      </Form>
    </EditProfileContainer>
  );
};

export default EditProfile;
