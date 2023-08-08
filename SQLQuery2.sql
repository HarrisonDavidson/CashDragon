USE [master]

IF db_id('CashDragon') IS NULL
	CREATE DATABASE [CashDragon]
GO

USE [CashDragon]
GO

DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [LEDGER];
DROP TABLE IF EXISTS [SCALES];
DROP TABLE IF EXISTS [HOARD];
DROP TABLE IF EXISTS [GOALS];
DROP TABLE IF EXISTS [UserType];

CREATE TABLE [UserType] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(20) NOT NULL
)


CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
  [DisplayName] nvarchar(50) NOT NULL,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [Email] nvarchar(555) NOT NULL,
  [CreateDateTime] datetime NOT NULL,
  [ImageLocation] nvarchar(255),
  [UserTypeId] int NOT NULL,
)
GO

CREATE TABLE [Ledger] (
  [ledger_id] int PRIMARY KEY IDENTITY,
  [userProfileId] int,
  [checking_amount] decimal
)
GO

CREATE TABLE [Scales] (
  [scale_id] int PRIMARY KEY IDENTITY,
  [userProfileId] int,
  [bill_name] nvarchar(255),
  [allocated_amount] decimal,
  [goal_amount] decimal,
)
GO

CREATE TABLE [Hoard] (
  [savings_id] int PRIMARY KEY IDENTITY,
  [userProfileId] int,
  [savings_amount] decimal
)
GO

CREATE TABLE [Goals] (
  [goal_id] int PRIMARY KEY IDENTITY,
  [userProfileId] int,
  [goal_name] nvarchar(255),
  [goal_amount] decimal,
  [allocated_amount] decimal
)
GO