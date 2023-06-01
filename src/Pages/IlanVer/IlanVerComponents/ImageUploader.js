import React, { useState } from "react";
import { Upload, Button, message, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from 'axios';
import { toast } from "react-toastify";
const ImageUploader = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const posturl = "http://localhost:3001/ilanver/ilanphoto";

  const uploadFile = (values) => {
   /*  setPreviewImages(...previewImages,values.imageFile.file.originFileObj) */
    console.log("file values");
    console.log(previewImages);
    const data = new FormData();
    data.append("image-file", values.imageFile.file.originFileObj);
    axios
      .post(posturl, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        message.success(response.data.message);
      })
      .catch((error) => {
        message.error(error);
      });
  };

  return (
    <div>
      <Form onFinish={uploadFile}>
        <Form.Item label="Seç" name="imageFile" >
          <Upload showUploadList={false} multiple={true}>
            <Button icon={<UploadOutlined />}>Resim Seç</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="success" htmlType="submit">
            KAYDET
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ImageUploader;