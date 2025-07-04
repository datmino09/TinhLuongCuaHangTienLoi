const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThangLuong', {
    MaThangLuong: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LuongCoBan: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    LuongTheoGio: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    BacLuong: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LoaiNV: {
      type: DataTypes.ENUM('PartTime','FullTime'),
      allowNull: false
    },
    MaVaiTro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vai_tro',
        key: 'MaVaiTro'
      }
    }
  }, {
    sequelize,
    tableName: 'thang_luong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaThangLuong" },
        ]
      },
      {
        name: "MaVaiTro",
        using: "BTREE",
        fields: [
          { name: "MaVaiTro" },
        ]
      },
    ]
  });
};
