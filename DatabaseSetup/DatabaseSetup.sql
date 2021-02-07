USE [master]
GO
/****** Object:  Database [Budget]    Script Date: 2/6/2021 5:04:17 PM ******/
CREATE DATABASE [Budget]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Budget', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER01\MSSQL\DATA\Budget.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Budget_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER01\MSSQL\DATA\Budget_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Budget] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Budget].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Budget] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Budget] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Budget] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Budget] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Budget] SET ARITHABORT OFF 
GO
ALTER DATABASE [Budget] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Budget] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Budget] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Budget] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Budget] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Budget] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Budget] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Budget] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Budget] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Budget] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Budget] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Budget] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Budget] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Budget] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Budget] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Budget] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Budget] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Budget] SET RECOVERY FULL 
GO
ALTER DATABASE [Budget] SET  MULTI_USER 
GO
ALTER DATABASE [Budget] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Budget] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Budget] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Budget] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Budget] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Budget', N'ON'
GO
ALTER DATABASE [Budget] SET QUERY_STORE = OFF
GO
USE [Budget]
GO
/****** Object:  Table [dbo].[Budget]    Script Date: 2/6/2021 5:04:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Budget](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BudgetTypeId] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[Amount] [money] NOT NULL,
 CONSTRAINT [PK_Budget] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BudgetType]    Script Date: 2/6/2021 5:04:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BudgetType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BudgetType] [text] NOT NULL,
 CONSTRAINT [PK_BudgetType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GiftCard]    Script Date: 2/6/2021 5:04:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GiftCard](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Place] [text] NOT NULL,
	[InitialAmount] [money] NOT NULL,
	[CardNumber] [varchar](255) NOT NULL,
	[AccessCode] [varchar](50) NULL,
 CONSTRAINT [PK_GiftCard] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Income]    Script Date: 2/6/2021 5:04:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Income](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SourceId] [int] NOT NULL,
	[SourceDetails] [text] NULL,
	[Amount] [decimal](18, 2) NOT NULL,
	[Date] [date] NOT NULL,
	[IsReimbursement] [bit] NOT NULL,
	[PurchaseId] [int] NULL,
	[IsCash] [bit] NOT NULL,
 CONSTRAINT [PK_Income] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IncomeSource]    Script Date: 2/6/2021 5:04:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncomeSource](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SourceName] [text] NOT NULL,
	[JobOf] [varchar](50) NOT NULL,
	[PositionName] [varchar](100) NULL,
	[ActiveJob] [bit] NOT NULL,
	[EstimatedIncome] [money] NULL,
	[PayFrequency] [nchar](20) NULL,
 CONSTRAINT [PK_IncomeSource] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Purchases]    Script Date: 2/6/2021 5:04:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Purchases](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseTypeId] [int] NOT NULL,
	[Description] [text] NULL,
	[Amount] [money] NOT NULL,
	[PaymentType] [varchar](50) NOT NULL,
	[GiftCardId] [int] NULL,
	[Date] [date] NOT NULL,
	[FutureReimbursement] [bit] NOT NULL,
 CONSTRAINT [PK_Purchases] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Budget]  WITH CHECK ADD  CONSTRAINT [FK_Budget_BudgetType] FOREIGN KEY([BudgetTypeId])
REFERENCES [dbo].[BudgetType] ([Id])
GO
ALTER TABLE [dbo].[Budget] CHECK CONSTRAINT [FK_Budget_BudgetType]
GO
ALTER TABLE [dbo].[Income]  WITH CHECK ADD  CONSTRAINT [FK_Income_IncomeSource] FOREIGN KEY([SourceId])
REFERENCES [dbo].[IncomeSource] ([Id])
GO
ALTER TABLE [dbo].[Income] CHECK CONSTRAINT [FK_Income_IncomeSource]
GO
USE [master]
GO
ALTER DATABASE [Budget] SET  READ_WRITE 
GO
