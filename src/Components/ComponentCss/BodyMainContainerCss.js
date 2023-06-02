import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;
  width: 873px;
`;
export const Vitrin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  .link {
    text-decoration: none !important; /* Altı çizgiyi kaldır */
    color: inherit !important; /* Varsayılan metin rengini kullan */
  }
  .link:hover {
    text-decoration: underline !important; /* Fare üzerine gelindiğinde altı çizgi ekle */
    color: inherit !important; /* Varsayılan metin rengini kullan */
  }
`;
