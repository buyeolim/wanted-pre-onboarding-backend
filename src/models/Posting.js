import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Posting = sequelize.define(
  'postings',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    company_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.TEXT,
    },
    skills: {
      type: DataTypes.STRING,
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

export default Posting;
