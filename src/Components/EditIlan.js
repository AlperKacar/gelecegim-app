import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Form, Table, Button, Modal, Input } from "antd";
import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const { Column } = Table;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TableContainer = styled.div`
  height: 500px;
  width: 900px;
  margin-bottom: 20px;
`;
const Paginationcontainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .page-button {
    background: white;
    border: 1px solid #ccc;
    color: #333;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 5px;
  }

  .page-button:hover {
    background-color: lightblue;
  }

  .page-button.active {
    background-color: lightblue;
    font-weight: bold;
  }
`;
const RemainingTime = styled.div`
  color: ${({ isExpired }) => (isExpired ? "red" : "black")};
`;

const EditProfile = () => {
  const { token } = useSelector((state) => state.userInformation);
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(true);
  const [ilan, setIlan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedIlan, setSelectedIlan] = useState(null);
  const [problemDescription, setProblemDescription] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3001/profile/Ilan", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIlan(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching user profile:", error.message);
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [token, form]);

  const maxIlansPerPage = 5;
  const indexOfLastIlan = currentPage * maxIlansPerPage;
  const indexOfFirstIlan = indexOfLastIlan - maxIlansPerPage;
  const currentIlans = ilan.slice(indexOfFirstIlan, indexOfLastIlan);

  const totalPages = Math.ceil(ilan.length / maxIlansPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (ilan) => {
    setSelectedIlan(ilan);
    setShowModal(true);
  };

  const handleProblemDescriptionChange = (event) => {
    setProblemDescription(event.target.value);
  };

  const [isReported, setIsReported] = useState(false);

  const handleSubmitProblem = async () => {
    try {
      await axios.post(
        "http://localhost:3001/profile/Ilan/problem",
        {
          problemDescription: problemDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Başarılı bir şekilde hatanız iletildi.");
      setSelectedIlan(null);
      setProblemDescription("");
      setShowModal(false);
      setIsReported(true);
    } catch (error) {
      console.log("Error submitting problem:", error.message);
    }
  };

  if (loading) {
    return null;
  }

  if (ilan.length === 0) {
    return <div>İlanınız bulunmamaktadır.</div>;
  }

  return (
    <>
      <Title>İlanlarım</Title>
      <TableContainer>
        <Table
          dataSource={currentIlans}
          pagination={false}
          scroll={{ x: 800 }} // Adjust the width as needed
        >
          <Column title="Başlık" dataIndex="baslik" key="baslik" width={200} />
          <Column title="Kategori" dataIndex="kategori" key="kategori" />
          <Column
            title="Alt Kategori"
            dataIndex="alt_kategori"
            key="alt_kategori"
          />
          <Column
            title="İlan Bitiş Tarihi"
            dataIndex="ilan_bitis_Tarihi"
            key="ilan_bitis_Tarihi"
            render={(text, record) => {
              const formattedDate = moment(text, "DD/M/YYYY").format(
                "YYYY-MM-DD"
              );
              const isExpired = moment(formattedDate).isBefore(moment());
              const remainingDays = moment(formattedDate).diff(
                moment(),
                "days"
              );
              return (
                <RemainingTime isExpired={isExpired}>
                  {isExpired ? "Süresi Dolmuş" : `${remainingDays} gün kaldı`}
                </RemainingTime>
              );
            }}
          />
          <Column
            title="İşlemler"
            key="actions"
            render={(text, record) => (
              <>
                <Link
                  to={`/ilan/${encodeURIComponent(record.baslik).replace(
                    /%20/g,
                    "-"
                  )}=${record.ilan_no}/detay`}
                >
                  <Button type="primary">İlanı Görüntüle</Button>
                </Link>
                <Button
                  style={
                    record.problemDescription
                      ? { background: "green", color: "white" }
                      : { background: "red", color: "white" }
                  }
                  onClick={() => handleEdit(record)}
                >
                  {record.problemDescription
                    ? "Hata Bildirildi"
                    : "Hata Bildir"}
                </Button>
              </>
            )}
          />
        </Table>
      </TableContainer>

      {totalPages > 1 && (
        <Paginationcontainer>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`page-button ${
                  pageNumber === currentPage ? "active" : ""
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
        </Paginationcontainer>
      )}

      <Modal
        open={showModal}
        title="İlan Düzenleme"
        onCancel={() => setShowModal(false)}
        footer={[
          <Button key="cancel" onClick={() => setShowModal(false)}>
            İptal
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitProblem}>
            Gönder
          </Button>,
        ]}
      >
        <div>
          Düzenleme için bir açıklama girin ve en kısa sürede sorununuz çözelim
          veya bizimle iletişime geçin.
        </div>
        <Input.TextArea
          rows={4}
          value={problemDescription}
          onChange={handleProblemDescriptionChange}
        />
      </Modal>
    </>
  );
};

export default EditProfile;
