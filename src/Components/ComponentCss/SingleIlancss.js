import styled from "styled-components";

export const VitrinList = styled.div`
  width: 164px;
  height: 80px;
  background-color: white;
  margin: 5px;
  padding: 3px 0 0 8px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  .link {
    text-decoration: none !important; /* Altı çizgiyi kaldır */
    color: inherit !important; /* Varsayılan metin rengini kullan */
  }

  .link:hover {
    text-decoration: underline !important; /* Fare üzerine gelindiğinde altı çizgi ekle */
    color: inherit !important; /* Varsayılan metin rengini kullan */
  }
  .VitrinList-Column {
    display: column;
  }

  .VitrinList-Flex {
    display: flex;
    align-items: center;
  }

  .VitrinImg {
    margin-right: 10px;
  }

  .VitrinList-Baslik {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .taşanları-gizle {
    width: 70px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .VitrinList-AltKategori {
    font-size: 10px;
    margin-bottom: 5px;
  }

  .VitrinList-Konum {
    margin-bottom: 5px;

    font-size: 10px;
    color: #888888;
  }

  &:hover {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;
