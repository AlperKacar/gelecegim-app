import styled from "styled-components";
import { Input, Button } from "antd";

export const EditProfileContainer = styled.div`
  width: 916px;
  padding: 20px;
  border-radius: 4px;
  background-color: #f8f8f8;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.7);
  margin: 20px;
  .h2 {
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px;
  color: #333;
`;
export const FormDisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
`;
export const FormDisplayColumn = styled.div`
  display: column;
`;

export const FormItemContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  color: #333;
  width: 100px;
  margin-left: 30px;
`;

export const StyledInput = styled(Input)`
  max-width: 300px;
  margin: 0 30px 0 0;
`;
export const FormItemButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const StyledButton = styled(Button)`
  margin-right: 20px;
`;

export const UploadContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
`;
