USE [master]
GO
/****** Object:  Database [Logrand]    Script Date: 12/06/2018 12:25:02 a. m. ******/
CREATE DATABASE [Logrand]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Logrand', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.SQLEXPRESS\MSSQL\DATA\Logrand.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Logrand_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.SQLEXPRESS\MSSQL\DATA\Logrand_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Logrand] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Logrand].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Logrand] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Logrand] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Logrand] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Logrand] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Logrand] SET ARITHABORT OFF 
GO
ALTER DATABASE [Logrand] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Logrand] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Logrand] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Logrand] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Logrand] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Logrand] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Logrand] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Logrand] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Logrand] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Logrand] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Logrand] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Logrand] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Logrand] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Logrand] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Logrand] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Logrand] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Logrand] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Logrand] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Logrand] SET  MULTI_USER 
GO
ALTER DATABASE [Logrand] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Logrand] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Logrand] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Logrand] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Logrand] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Logrand] SET QUERY_STORE = OFF
GO
USE [Logrand]
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [Logrand]
GO
/****** Object:  Table [dbo].[Celda]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Celda](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_tema] [int] NOT NULL,
	[titulo] [varchar](250) NOT NULL,
	[descripcion] [varchar](500) NOT NULL,
	[estatus] [bit] NOT NULL,
	[fecha_creado] [date] NULL,
	[fecha_editado] [date] NULL,
 CONSTRAINT [PK_Celda] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Celda_Archivo]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Celda_Archivo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_celda] [int] NOT NULL,
	[archivo] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Celda_Archivo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Celda_Preview]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Celda_Preview](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_celda] [int] NOT NULL,
	[archivo] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Celda_Preview] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Marca]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Marca](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](250) NOT NULL,
	[color] [varchar](250) NOT NULL,
	[logo_principal] [varchar](250) NOT NULL,
	[fecha_creado] [date] NOT NULL,
	[estatus] [varchar](50) NULL,
	[fecha_editado] [date] NULL,
	[logo_banner] [varchar](250) NULL,
	[categoria] [int] NULL,
 CONSTRAINT [PK_Marca] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Marca_Subseccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Marca_Subseccion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[marca_id] [int] NOT NULL,
	[subseccion_id] [int] NOT NULL,
 CONSTRAINT [PK_marca_subseccion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Seccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Seccion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](250) NOT NULL,
	[estatus] [bit] NOT NULL,
	[fecha_creado] [date] NULL,
	[fecha_editado] [date] NULL,
 CONSTRAINT [PK_Secciones] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SubSeccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubSeccion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](250) NOT NULL,
	[id_seccion] [int] NOT NULL,
	[estatus] [bit] NOT NULL,
	[fecha_creado] [date] NOT NULL,
	[fecha_editado] [date] NULL,
 CONSTRAINT [PK_SubSeccion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tema]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tema](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_marca_subseccion] [int] NOT NULL,
	[categoria] [int] NOT NULL,
	[nombre] [varchar](250) NOT NULL,
	[estatus] [bit] NOT NULL,
	[fecha_creado] [date] NULL,
	[fecha_editado] [date] NULL,
 CONSTRAINT [PK_Tema] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[Celda]  WITH CHECK ADD  CONSTRAINT [FK_Celda_Tema] FOREIGN KEY([id_tema])
REFERENCES [dbo].[Tema] ([id])
GO
ALTER TABLE [dbo].[Celda] CHECK CONSTRAINT [FK_Celda_Tema]
GO
ALTER TABLE [dbo].[Celda_Archivo]  WITH CHECK ADD  CONSTRAINT [FK_Celda_Archivo_Celda] FOREIGN KEY([id_celda])
REFERENCES [dbo].[Celda] ([id])
GO
ALTER TABLE [dbo].[Celda_Archivo] CHECK CONSTRAINT [FK_Celda_Archivo_Celda]
GO
ALTER TABLE [dbo].[Celda_Preview]  WITH CHECK ADD  CONSTRAINT [FK_Celda_Preview_Celda] FOREIGN KEY([id_celda])
REFERENCES [dbo].[Celda] ([id])
GO
ALTER TABLE [dbo].[Celda_Preview] CHECK CONSTRAINT [FK_Celda_Preview_Celda]
GO
ALTER TABLE [dbo].[Marca_Subseccion]  WITH CHECK ADD  CONSTRAINT [FK_marca_subseccion_Marca] FOREIGN KEY([marca_id])
REFERENCES [dbo].[Marca] ([id])
GO
ALTER TABLE [dbo].[Marca_Subseccion] CHECK CONSTRAINT [FK_marca_subseccion_Marca]
GO
ALTER TABLE [dbo].[Marca_Subseccion]  WITH CHECK ADD  CONSTRAINT [FK_marca_subseccion_SubSeccion] FOREIGN KEY([subseccion_id])
REFERENCES [dbo].[SubSeccion] ([id])
GO
ALTER TABLE [dbo].[Marca_Subseccion] CHECK CONSTRAINT [FK_marca_subseccion_SubSeccion]
GO
ALTER TABLE [dbo].[SubSeccion]  WITH CHECK ADD  CONSTRAINT [FK_SubSeccion_Seccion] FOREIGN KEY([id_seccion])
REFERENCES [dbo].[Seccion] ([id])
GO
ALTER TABLE [dbo].[SubSeccion] CHECK CONSTRAINT [FK_SubSeccion_Seccion]
GO
ALTER TABLE [dbo].[Tema]  WITH CHECK ADD  CONSTRAINT [FK_Tema_marca_subseccion] FOREIGN KEY([id_marca_subseccion])
REFERENCES [dbo].[Marca_Subseccion] ([id])
GO
ALTER TABLE [dbo].[Tema] CHECK CONSTRAINT [FK_Tema_marca_subseccion]
GO
/****** Object:  StoredProcedure [dbo].[BajaCelda]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[BajaCelda]
	-- Add the parameters for the stored procedure here
@id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	UPDATE Celda
		 SET estatus = 0
			WHERE id= @id
END


GO
/****** Object:  StoredProcedure [dbo].[BajaMarca]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[BajaMarca] 
	-- Add the parameters for the stored procedure here
@id int
AS
BEGIN
	
UPDATE Marca
SET estatus = '-1'
WHERE id=@id
END

GO
/****** Object:  StoredProcedure [dbo].[bajaTema]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[bajaTema]
	-- Add the parameters for the stored procedure here
@id nvarchar(200)

 AS
BEGIN
	UPDATE Tema
             SET estatus = 0
             WHERE id  = @id
END

GO
/****** Object:  StoredProcedure [dbo].[cambiarTema]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[cambiarTema] 
	@nombre nvarchar(200),
@categoria nvarchar(200),
@id_marca_subseccion nvarchar(200),
@id nvarchar(200),

@formatDate nvarchar(200)
AS
BEGIN
UPDATE tema SET
					nombre= @nombre ,
					categoria= @categoria ,
					id_marca_subseccion= @id_marca_subseccion ,
					fecha_editado =  @formatDate 
					WHERE id=  @id
END

GO
/****** Object:  StoredProcedure [dbo].[getMarcaSubseccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getMarcaSubseccion]
	-- Add the parameters for the stored procedure here
	@id int
	
AS
BEGIN

select Marca_Subseccion.id,marca_id,subseccion_id,nombre from Marca_Subseccion
			 join SubSeccion ON Marca_Subseccion.subseccion_id = SubSeccion.id
			 where marca_id = @id
END

GO
/****** Object:  StoredProcedure [dbo].[insertarTema]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[insertarTema] 
	@nombre nvarchar(200),
@categoria nvarchar(200),
@id_marca_subseccion nvarchar(200),
@formatDate nvarchar(200)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	INSERT INTO [tema] (nombre,categoria,id_marca_subseccion,fecha_creado,estatus) 
					 VALUES(  @nombre  , 
					   @categoria  , 
					   @id_marca_subseccion  , 
					   @formatDate  , 
					 1)
END

GO
/****** Object:  StoredProcedure [dbo].[InsertSubSeccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertSubSeccion]
	-- Add the parameters for the stored procedure here
	@nombre nvarchar(200),
	@idseccion int,
	@fecha nvarchar(200)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
INSERT INTO [subseccion] 
(nombre,id_seccion,fecha_creado,estatus)
 VALUES (@nombre,@idseccion,@fecha,'1')
END

GO
/****** Object:  StoredProcedure [dbo].[InsterCelda]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsterCelda] 
	-- Add the parameters for the stored procedure here
@titulo nvarchar(200),
@id_tema nvarchar(200),
@desc nvarchar(200),
@fecha nvarchar(200),
@preview nvarchar(200),
@archivo nvarchar(200)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	declare @ModelID int  
	INSERT INTO [celda] (titulo,id_tema,descripcion,fecha_creado,estatus)
			VALUES(@titulo,
			@id_tema ,
			@desc ,
			@fecha ,
			1)
			SET @ModelID = (select SCOPE_IDENTITY() as 'id')
			INSERT INTO Celda_Preview(id_celda, archivo)
			VALUES(@ModelID , @preview)
			INSERT INTO Celda_Archivo(id_celda, archivo)
			VALUES(@ModelID , @archivo)
END

GO
/****** Object:  StoredProcedure [dbo].[InsterMarca]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsterMarca] 
	-- Add the parameters for the stored procedure here
@nombre nvarchar(200),
@color nvarchar(200),
@categoria nvarchar(200),
@banner nvarchar(200),
@filename nvarchar(200),
@fecha nvarchar(200)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
INSERT INTO marca 
(nombre,color,logo_principal,fecha_creado,estatus,categoria,logo_banner) 
VALUES (@nombre,@color,@filename,@fecha,'1',@categoria,@banner)
END

GO
/****** Object:  StoredProcedure [dbo].[InsterSeccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsterSeccion]
	-- Add the parameters for the stored procedure here
@nombre nvarchar(200),
@fecha nvarchar(200)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
INSERT INTO [seccion] (nombre,fecha_creado,estatus) 
VALUES (@nombre,@fecha,'1')
END

GO
/****** Object:  StoredProcedure [dbo].[ListaCelda]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ListaCelda] 
AS
BEGIN
	SET NOCOUNT ON;
   select
 Celda.id,
 Celda.id_tema,
 Celda.titulo,
 Celda.descripcion,
 Tema.nombre
 FROM [Logrand].[dbo].[Celda]
 join Tema ON Celda.id_tema = Tema.id	 where Celda.estatus = 1
END

GO
/****** Object:  StoredProcedure [dbo].[ListaMarca]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ListaMarca]
AS
BEGIN
	select * from [marca] where estatus != '-1'
END

GO
/****** Object:  StoredProcedure [dbo].[ListaSubSeccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ListaSubSeccion]
AS
BEGIN
	select
			SubSeccion.id,
			SubSeccion.nombre,
			SubSeccion.id_seccion,
			Seccion.nombre as 'seccionNombre'
			from SubSeccion join Seccion ON SubSeccion.id_seccion = Seccion.id
			where SubSeccion.estatus = 1
END

GO
/****** Object:  StoredProcedure [dbo].[ListaTema]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ListaTema]
AS
BEGIN
	 select
			 Tema.id,
			 Tema.nombre,
			 Tema.categoria,			 
			 Tema.id_marca_subseccion,
			 SubSeccion.nombre as 'SubSeccionNombre',
			 Marca.nombre as 'MarcaNombre',
			 Marca.id as 'id_marca'
			 from Tema 
			 join Marca_Subseccion ON Tema.id_marca_subseccion = Marca_Subseccion.id
			 join SubSeccion ON Marca_Subseccion.subseccion_id = SubSeccion.id
			 join Marca ON Marca_Subseccion.marca_id = Marca.id
			 where Tema.estatus = 1;
END

GO
/****** Object:  StoredProcedure [dbo].[UpdateCelda]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateCelda]
	-- Add the parameters for the stored procedure here
@titulo nvarchar(200),
@id_tema nvarchar(200),
@desc nvarchar(200),
@fecha nvarchar(200),
@id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	UPDATE Celda SET
			titulo= @titulo,
			descripcion= @desc,
			id_tema= @id_tema ,
			fecha_editado = @fecha
			WHERE id= @id
END


GO
/****** Object:  StoredProcedure [dbo].[UpdateMarca1]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateMarca1] 
	-- Add the parameters for the stored procedure here
@nombre nvarchar(200),
@color nvarchar(200),
@fecha nvarchar(200),
@id int,
@categoria nvarchar(200),
@banner nvarchar(200),
@filename nvarchar(200)
AS
BEGIN


UPDATE marca SET 
nombre= @nombre,
color=@color,
fecha_editado=@fecha,

logo_principal = CASE WHEN(@filename IS NOT NULL) OR (LEN(@filename) > 0)
 THEN logo_principal ELSE @filename END,
 
 logo_banner = CASE WHEN(@banner IS NOT NULL) OR (LEN(@banner) > 0)
 THEN logo_banner ELSE @banner END
WHERE id=@id
END

GO
/****** Object:  StoredProcedure [dbo].[UpdateMarca2]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateMarca2] 
	-- Add the parameters for the stored procedure here
@nombre nvarchar(200),
@color nvarchar(200),
@filename nvarchar(200),
@fecha nvarchar(200),
@id int
AS
BEGIN
	
UPDATE marca SET 
nombre= @nombre,
color=@color,
fecha_editado=@fecha,
logo_principal=@filename
WHERE id=@id
END

GO
/****** Object:  StoredProcedure [dbo].[UpdateSubSeccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateSubSeccion]
	-- Add the parameters for the stored procedure here
	@nombre nvarchar(200),
	@id int,
	@fecha nvarchar(200)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
UPDATE subseccion 
SET nombre=@nombre,fecha_editado=@fecha
WHERE id=@id
END

GO
/****** Object:  StoredProcedure [dbo].[wfgetCelda]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[wfgetCelda]
	-- Add the parameters for the stored procedure here
 @id nvarchar(200)
AS
BEGIN
	select * from Celda where id_tema =  @id 
	 AND estatus = '1'
END

GO
/****** Object:  StoredProcedure [dbo].[wfgetSeccion]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[wfgetSeccion] 
	-- Add the parameters for the stored procedure here
 @id nvarchar(200) AS
BEGIN
select id,nombre from seccion where id = @id AND estatus = '1'
END

GO
/****** Object:  StoredProcedure [dbo].[wfgettema]    Script Date: 12/06/2018 12:25:02 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[wfgettema] 
	-- Add the parameters for the stored procedure here
@id nvarchar(200),
@idc nvarchar(200)
AS
BEGIN
	select * from Tema where id_marca_subseccion = @id 
			 AND estatus = '1' 
			 AND categoria =  @idc
END

GO
USE [master]
GO
ALTER DATABASE [Logrand] SET  READ_WRITE 
GO
