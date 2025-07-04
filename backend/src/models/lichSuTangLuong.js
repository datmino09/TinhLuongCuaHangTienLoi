const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LichSuTangLuong', {
    MaLSTL: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LuongCoBanCu: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    LuongCoBanMoi: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    BacLuongCu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BacLuongMoi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NgayApDung: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    MaTK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tai_khoan',
        key: 'MaTK'
      }
    }
  }, {
    sequelize,
    tableName: 'lich_su_tang_luong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaLSTL" },
        ]
      },
      {
        name: "MaNS",
        using: "BTREE",
        fields: [
          { name: "MaTK" },
        ]
      },
    ]
  });
};
