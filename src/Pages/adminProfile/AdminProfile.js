import React, { useState, useEffect } from "react";
import { Table, Button, Menu } from "antd";
import Modal from "antd/lib/modal/Modal";
import axios from "axios";

export default function AdminProfile() {
  const [users, setUsers] = useState([]);
  const [ilans, setIlans] = useState([]);
  const [selectedUserDetails, setSelectedUserDetails] = useState([]);
  const [selectedIlanDetails, setSelectedIlanDetails] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserIdDelete, setSelectedUserIdDelete] = useState(null);
  const [selectedIlanIdDelete, setSelectedIlanIdDelete] = useState(null);
  const [selectedUserIdDetails, setSelectedUserIdDetails] = useState(null);
  const [selectedIlanIdDetails, setSelectedIlanIdDetails] = useState(null);
  const [ilanlar, setIlanlar] = useState([]);
  const [menuKey, setMenuKey] = useState("users");
  const [isVerified, setIsVerified] = useState("");
  const [hesapTuru, setHesapTuru] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [ilanlarSearch, setIlanlarSearch] = useState("");
  const [deleteModalVisibleIlan, setDeleteModalVisibleIlan] = useState(false);
  const [deleteModalVisibleUser, setDeleteModalVisibleUser] = useState(false);
  const showDeleteModalUser = (userId) => {
    setSelectedUserIdDelete(userId);
    setDeleteModalVisibleUser(true);
  };
  const showDeleteModalIlan = (userId) => {
    setSelectedIlanIdDelete(userId);
    setDeleteModalVisibleIlan(true);
  };
  const fetchUsers = async () => {
    try {
      if (menuKey === "ilanlar") {
        const response = await axios.get("http://localhost:3001/admin/ilans", {
          params: {
            isVerified: isVerified,
            search: ilanlarSearch,
          },
        });
        setIlans(response.data.Ilans);
      } else {
        const response = await axios.get("http://localhost:3001/admin/users", {
          params: {
            hesapTuru: hesapTuru,
            search: userSearch,
          },
        });
        setUsers(response.data.users);
      }
      setUserSearch("");
      setIlanlarSearch("");
    } catch (error) {
      console.error("Kullanıcıları getirirken bir hata oluştu:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [isVerified, hesapTuru, menuKey]);

  const handleViewUserIlanlar = async (userId) => {
    try {
      if (userId === selectedUserId) {
        setSelectedUserId(null);
        setIlanlar([]);
        return;
      }

      const response = await axios.get(
        `http://localhost:3001/admin/users/ilanlar/${userId}`
      );

      setSelectedUserId(userId);
      setIlanlar(response.data.Ilans);
    } catch (error) {
      console.error(
        "Kullanıcının ilanlarını getirirken bir hata oluştu:",
        error
      );
    }
  };

  const handleMenuClick = (event) => {
    setMenuKey(event.key);
    setHesapTuru("");
    setIsVerified("");
  };

  const handleUserMenuClick = (event) => {
    setHesapTuru(event.key);
  };

  const handleIlanMenuClick = (event) => {
    setIsVerified(event.key);
  };
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/admin/users/delete/${userId}`);

      setDeleteModalVisibleUser(false);

      fetchUsers();
    } catch (error) {
      console.error("İlan silinirken bir hata oluştu:", error);
    }
  };

  const handleViewUserDetails = async (userId) => {
    try {
      if (userId === selectedUserIdDetails) {
        setSelectedUserIdDetails(null);
        setSelectedUserDetails([]);
        return;
      }

      const response = await axios.get(
        `http://localhost:3001/admin/users/details/${userId}`
      );

      setSelectedUserIdDetails(userId);
      setSelectedUserDetails(response.data);
    } catch (error) {
      console.error("Kullanıcı detaylarını getirirken bir hata oluştu:", error);
    }
  };
  const handleViewIlanDetails = async (userId) => {
    try {
      if (userId === selectedIlanIdDetails) {
        setSelectedIlanIdDetails(null);
        setSelectedIlanDetails([]);
        return;
      }

      const response = await axios.get(
        `http://localhost:3001/admin/ilans/details/${userId}`
      );

      setSelectedIlanIdDetails(userId);
      setSelectedIlanDetails(response.data);
    } catch (error) {
      console.error("Kullanıcı detaylarını getirirken bir hata oluştu:", error);
    }
  };
  const handleEditIlan = (userId) => {};
  const handleDeleteIlan = async (userId) => {
    try {
      // Make the delete request using axios or your preferred HTTP library
      await axios.delete(
        `http://localhost:3001/admin/ilanlar/delete/${userId}`
      );

      // Close the delete confirmation modal
      setDeleteModalVisibleIlan(false);

      // Refresh the ad list by calling fetchUsers or any other suitable function
      fetchUsers();
    } catch (error) {
      console.error("İlan silinirken bir hata oluştu:", error);
    }
  };
  const handleisVerifiedIlan = async (userId) => {
    try {
      await axios.get(
        `http://localhost:3001/admin/ilanlar/isVerified/${userId}`
      );
    } catch (error) {
      console.error("İlan doğrulama hatası:", error);
    }
  };
  const columns = [
    {
      title: "Vergi",
      dataIndex: "vkNo",
      key: "vkNo",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "E-posta",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "İlanlar",
      key: "ilanlar",
      render: (_, record) => (
        <div>
          {selectedUserId === record._id ? (
            <Button onClick={() => handleViewUserIlanlar(record._id)}>
              İlanı Gizle
            </Button>
          ) : (
            <span>
              {record && record.Ilan ? (
                <Button onClick={() => handleViewUserIlanlar(record._id)}>
                  İlanı Göster
                </Button>
              ) : (
                <span>İlan Yok</span>
              )}
            </span>
          )}
        </div>
      ),
    },
    {
      title: "İşlemler",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            style={{
              color: "White",
              background: "red",
              width: 80,
              marginRight: 10,
            }}
            onClick={() => showDeleteModalUser(record._id)}
          >
            Sil
          </Button>
          {selectedUserIdDetails === record._id ? (
            <>
              <Button
                style={{
                  color: "White",
                  background: "blue",
                  width: 120,
                  marginRight: 10,
                }}
                onClick={() => handleViewUserDetails(record._id)}
              >
                Detayları kapat
              </Button>
            </>
          ) : (
            <Button
              style={{
                color: "White",
                background: "blue",
                width: 120,
              }}
              onClick={() => handleViewUserDetails(record._id)}
            >
              Detaylar
            </Button>
          )}
        </div>
      ),
    },
    {
      title: "Doğrulama",
      key: "isVerified",
      render: (_, record) => (
        <div>
          {record && record.isVerified ? (
            <h4
              style={{
                color: "White",
                background: "green",
                width: 120,
              }}
            >
              Doğrulanmış Kullanıcı
            </h4>
          ) : (
            <h4 style={{ color: "White", background: "red", width: 120 }}>
              Doğrulanmamış Kullanıcı
            </h4>
          )}
        </div>
      ),
    },
  ];
  const ilanlarColumns = [
    {
      title: "Başlık",
      dataIndex: "baslik",
      key: "baslik",
    },
    {
      title: "Açıklama",
      dataIndex: "ilan_aciklama",
      key: "ilan_aciklama",
    },
    {
      title: "Ücret",
      dataIndex: "ucret",
      key: "ucret",
    },
    {
      title: "İşlemler",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            style={{
              color: "White",
              background: "red",
              width: 80,
              marginRight: 10,
            }}
            onClick={() => showDeleteModalIlan(record._id)}
          >
            Sil
          </Button>
          {selectedIlanIdDetails === record._id ? (
            <>
              <Button
                style={{
                  color: "White",
                  background: "blue",
                  width: 120,
                  marginRight: 10,
                }}
                onClick={() => handleViewIlanDetails(record._id)}
              >
                Detayları kapat
              </Button>
            </>
          ) : (
            <Button
              style={{
                color: "White",
                background: "blue",
                width: 120,
              }}
              onClick={() => handleViewIlanDetails(record._id)}
            >
              Detaylar
            </Button>
          )}
        </div>
      ),
    },
    {
      title: "Doğrulama",
      key: "isVerified",
      render: (_, record) => (
        <div>
          {record && record.isVerified ? (
            <h4>Doğrulanmış Ilan</h4>
          ) : (
            <Button
              style={{ color: "White", background: "green", width: 120 }}
              onClick={() => handleisVerifiedIlan(record._id)}
            >
              Doğrula
            </Button>
          )}
        </div>
      ),
    },
  ];
  const ilanlarColumn = [
    {
      title: "_id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Başlık",
      dataIndex: "baslik",
      key: "baslik",
    },
    {
      title: "Açıklama",
      dataIndex: "ilan_aciklama",
      key: "ilan_aciklama",
    },
    {
      title: "kurs_baslama_tarihi",
      dataIndex: "kurs_baslama_tarihi",
      key: "kurs_baslama_tarihi",
    },
    {
      title: "kurs_bitirme_tarihi",
      dataIndex: "kurs_bitirme_tarihi",
      key: "kurs_bitirme_tarihi",
    },
    {
      title: "olusturan Kişinin _id",
      dataIndex: "olusturan",
      key: "olusturan",
    },
    {
      title: "İşlemler",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            style={{
              color: "White",
              background: "red",
              width: 80,
              marginRight: 10,
            }}
            onClick={() => showDeleteModalIlan(record._id)}
          >
            Sil
          </Button>
          {selectedIlanIdDetails === record._id ? (
            <>
              <Button
                style={{
                  color: "White",
                  background: "blue",
                  width: 120,
                  marginRight: 10,
                }}
                onClick={() => handleViewIlanDetails(record._id)}
              >
                Detayları kapat
              </Button>
            </>
          ) : (
            <Button
              style={{
                color: "White",
                background: "blue",
                width: 120,
              }}
              onClick={() => handleViewIlanDetails(record._id)}
            >
              Detaylar
            </Button>
          )}
        </div>
      ),
    },
    {
      title: "Doğrulama",
      key: "isVerified",
      render: (_, record) => (
        <div>
          {record && record.isVerified ? (
            <h4>Doğrulanmış Ilan</h4>
          ) : (
            <Button
              style={{ color: "White", background: "green", width: 120 }}
              onClick={() => handleisVerifiedIlan(record._id)}
            >
              Doğrula
            </Button>
          )}
        </div>
      ),
    },
  ];
  const userDetailsFirstColumns = [
    {
      title: "Ad",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Soyad",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "E-posta",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Ilan Sayısı",
      dataIndex: "Ilan",
      key: "Ilan",
    },
    {
      title: "_id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Kayıt Tarihi",
      dataIndex: "regDate",
      key: "regDate",
    },
    {
      title: "hesapTuru",
      dataIndex: "hesapTuru",
      key: "hesapTuru",
    },
  ];
  const userDetailsSecondColumns = [
    {
      title: "Kurum Türü",
      dataIndex: "business",
      key: "business",
    },
    {
      title: "TC Kimlik",
      dataIndex: "tcno",
      key: "tcno",
    },
    {
      title: "Telefon",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Vergi Dairesi Adı",
      dataIndex: "vdad",
      key: "vdad",
    },
    {
      title: "Vergi Dairesi İli",
      dataIndex: "vdil",
      key: "vdil",
    },
    {
      title: "Vergi Kimlik No",
      dataIndex: "vkNo",
      key: "vkNo",
    },
    {
      title: "İl",
      dataIndex: "il",
      key: "il",
    },
    {
      title: "İlçe",
      dataIndex: "ilce",
      key: "ilce",
    },
  ];
  const IlanDetailsFirstColumns = [
    {
      title: "Başlık",
      dataIndex: "baslik",
      key: "baslik",
    },
    {
      title: "Açıklama",
      dataIndex: "ilan_aciklama",
      key: "ilan_aciklama",
    },
    {
      title: "Ücret",
      dataIndex: "ucret",
      key: "ucret",
    },
    {
      title: "_id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Kayıt Tarihi",
      dataIndex: "ilan_tarihi",
      key: "ilan_tarihi",
    },
    {
      title: "egitmen_sayisi",
      dataIndex: "egitmen_sayisi",
      key: "egitmen_sayisi",
    },
  ];
  const IlanDetailsSecondColumns = [
    {
      title: "kategori ",
      dataIndex: "kategori",
      key: "kategori",
    },
    {
      title: "kurs_baslama_tarihi",
      dataIndex: "kurs_baslama_tarihi",
      key: "kurs_baslama_tarihi",
    },
    {
      title: "kurs_bitirme_tarihi",
      dataIndex: "kurs_bitirme_tarihi",
      key: "kurs_bitirme_tarihi",
    },
    {
      title: "taksit_imkani",
      dataIndex: "taksit_imkani",
      key: "taksit_imkani",
    },
    {
      title: "sertifika",
      dataIndex: "sertifika",
      key: "sertifika",
    },
    {
      title: "İl",
      dataIndex: "konum_il",
      key: "konum_il",
    },
    {
      title: "İlçe",
      dataIndex: "konum_ilce",
      key: "konum_ilce",
    },
  ];
  const UserDetailsTable = () => {
    return (
      <>
        {menuKey === "users" && selectedUserIdDetails && (
          <>
            <h2>Kullanıcı Detayları</h2>

            <Table
              dataSource={selectedUserDetails}
              columns={userDetailsFirstColumns}
              rowKey="_id"
              pagination={false}
              locale={{
                emptyText: "Veri bulunamadı",
              }}
            />
            {selectedUserDetails[0].hesapTuru !== "Bireysel" && (
              <Table
                dataSource={selectedUserDetails}
                columns={userDetailsSecondColumns}
                rowKey="_id"
                pagination={false}
                locale={{
                  emptyText: "Veri bulunamadı",
                }}
              />
            )}

            <Button>Düzenle</Button>
          </>
        )}
      </>
    );
  };
  const IlanDetailsTable = () => {
    return (
      <>
        {selectedIlanIdDetails && (
          <>
            <h2>Ilanın Detayları</h2>

            <Table
              dataSource={selectedIlanDetails}
              columns={IlanDetailsFirstColumns}
              rowKey="_id"
              pagination={false}
              locale={{
                emptyText: "Veri bulunamadı",
              }}
            />

            <Table
              dataSource={selectedIlanDetails}
              columns={IlanDetailsSecondColumns}
              rowKey="_id"
              pagination={false}
              locale={{
                emptyText: "Veri bulunamadı",
              }}
            />

            <Button>Düzenle</Button>
          </>
        )}
      </>
    );
  };
  return (
    <div>
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[menuKey]}
        mode="horizontal"
      >
        <Menu.Item key="users">Kullanıcılar</Menu.Item>
        <Menu.Item key="ilanlar">İlanlar</Menu.Item>
      </Menu>

      {menuKey === "users" && (
        <>
          <Menu
            onClick={handleUserMenuClick}
            selectedKeys={hesapTuru}
            mode="horizontal"
          >
            <Menu.Item key="">Hepsini Göster</Menu.Item>
            <Menu.Item key="Bireysel">Bireysel</Menu.Item>
            <Menu.Item key="Limited veya Anonim Şirketi">
              Limited veya Anonim Şirketi
            </Menu.Item>
            <Menu.Item key="Şahıs Şirketi">Şahıs Şirketi</Menu.Item>
            <Menu.Item key="true">doğrulanmış</Menu.Item>
            <Menu.Item key="false">doğrulanmamış</Menu.Item>
          </Menu>
          <input
            type="text"
            placeholder=" Kelimeyle Kullanıcı ARA"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />

          <button onClick={fetchUsers}>Ara</button>
        </>
      )}

      {menuKey === "ilanlar" && (
        <>
          <Menu
            onClick={handleIlanMenuClick}
            selectedKeys={isVerified}
            mode="horizontal"
          >
            <Menu.Item key="">Hepsini Göster</Menu.Item>
            <Menu.Item key="true">Doğrulanmış İlanlar</Menu.Item>
            <Menu.Item key="false">Doğrulanmamış İlanlar</Menu.Item>
          </Menu>
          <input
            type="text"
            placeholder="İlan ara"
            value={ilanlarSearch}
            onChange={(e) => setIlanlarSearch(e.target.value)}
          />
          <button onClick={fetchUsers}>Ara</button>
        </>
      )}
      {menuKey === "users" && (
        <Table
          dataSource={users}
          columns={columns}
          rowKey="_id"
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30", "40"],
          }}
          locale={{
            emptyText: "Veri bulunamadı",
          }}
        />
      )}

      {menuKey === "users" && selectedUserId && (
        <>
          <h2>ilanlar</h2>
          <Table
            dataSource={ilanlar}
            columns={ilanlarColumn}
            rowKey="_id"
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: ["10", "20", "30", "40"],
            }}
            locale={{
              emptyText: "Veri bulunamadı",
            }}
          />
        </>
      )}

      {menuKey === "ilanlar" && (
        <>
          <Table
            dataSource={ilans}
            columns={ilanlarColumns}
            rowKey="_id"
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: ["10", "20", "30", "40"],
            }}
            locale={{
              emptyText: "Veri bulunamadı",
            }}
          />
        </>
      )}
      <Modal
        open={deleteModalVisibleIlan}
        onCancel={() => setDeleteModalVisibleIlan(false)}
        onOk={() => handleDeleteIlan(selectedIlanIdDelete)}
        okText="Sil"
        cancelText="Vazgeç"
      >
        <p>Ilanı silmek istediğinize emin misiniz?</p>
      </Modal>
      <Modal
        open={deleteModalVisibleUser}
        onCancel={() => setDeleteModalVisibleUser(false)}
        onOk={() => handleDeleteUser(selectedUserIdDelete)}
        okText="Sil"
        cancelText="Vazgeç"
      >
        <p>Kullanıcıyı silmek istediğinize emin misiniz?</p>
      </Modal>
      <UserDetailsTable />
      <IlanDetailsTable />
    </div>
  );
}
