import React, { useState, useEffect } from "react";
import { Table, Button, Menu } from "antd";
import axios from "axios";

export default function AdminProfile() {
  const [users, setUsers] = useState([]);
  const [ilans, setIlans] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [ilanlar, setIlanlar] = useState([]);
  const [menuKey, setMenuKey] = useState("users");
  const [isVerified, setIsVerified] = useState("");
  const [hesapTuru, setHesapTuru] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [ilanlarSearch, setIlanlarSearch] = useState("");

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
    } catch (error) {
      console.error("Kullanıcıları getirirken bir hata oluştu:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [isVerified, hesapTuru, userSearch, menuKey]);

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
    setIsVerified("");
    setSelectedUserId(null);
    setIlanlar([]);
  };

  const handleIlanMenuClick = (event) => {
    setIsVerified(event.key);
    setIlans([]);
  };
  const handleDeleteUser = (userId) => {};
  const handleEditUser = (userId) => {};
  const handleViewUserDetails = (userId) => {};
  const handleIlanDetail = (userId) => {};
  const handleEditIlan = (userId) => {};
  const handleDeleteIlan = (userId) => {};
  const columns = [
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
          <Button onClick={() => handleDeleteUser(record._id)}>Sil</Button>
          <Button onClick={() => handleEditUser(record._id)}>Düzenle</Button>
          <Button onClick={() => handleViewUserDetails(record._id)}>
            Detaylar
          </Button>
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
          <Button onClick={() => handleIlanDetail(record)}>Detaylar</Button>
          <Button onClick={() => handleEditIlan(record)}>Düzenle</Button>
          <Button onClick={() => handleDeleteIlan(record._id)}>Sil</Button>
        </div>
      ),
    },
  ];
  const ilanlarColumn = [
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
          <Button onClick={() => handleIlanDetail(record)}>Detaylar</Button>
          <Button onClick={() => handleEditIlan(record)}>Düzenle</Button>
          <Button onClick={() => handleDeleteIlan(record._id)}>Sil</Button>
        </div>
      ),
    },
  ];

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
            selectedKeys={hesapTuru === "" ? "" : [hesapTuru]}
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
            placeholder="Kullanıcı ara"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
        </>
      )}

      {menuKey === "ilanlar" && (
        <>
          <Menu
            onClick={handleIlanMenuClick}
            selectedKeys={isVerified === "" ? "" : [isVerified]}
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
          <span>ilanlar</span>
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
    </div>
  );
}
