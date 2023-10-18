import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Application = sequelize.define(
  'applications',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    posting_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

export default Application;
