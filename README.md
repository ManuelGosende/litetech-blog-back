# Lite-Tech Blog - Backend

Esta es la API para el challenge de Lite-Tech. Desarrollada con NestJS, TypeScript y Prisma, provee los endpoints necesarios para la funcionalidad de posts del blog.

## Live Demo

La API está desplegada y su URL base es:

- **Backend:** [https://litetech-blog-back.onrender.com](https://litetech-blog-back.onrender.com)

Se conecta a una base de datos PostgreSQL alojada en Neon. El frontend que la consume se encuentra en:

- **Frontend:** [https://litetech-blog.vercel.app](https://litetech-blog.vercel.app)

---

## Entorno de Desarrollo Local

Seguir estos pasos para levantar el proyecto localmente.

### Prerrequisitos

- Node.js (v18 o superior)
- npm

### 1. Clonar el Repositorio

El código fuente de este proyecto se encuentra en GitLab, en la rama `feature/manuel-gosende`.

```bash
git clone --branch feature/manuel-gosende https://gitlab.com/litebox/internal/challenges/dev-Manuel-Gosende-backend.git
cd dev-Manuel-Gosende-backend
```

### 2. Instalar Dependencias

Instalar todas las dependencias del proyecto con npm.

```bash
npm install
```

### 3. Configurar la Base de Datos Local (SQLite)

Para desarrollo local, se utiliza una base de datos SQLite para simplificar la configuración.

#### 3.1. Modificar el Esquema de Prisma

Abrir el archivo `prisma/schema.prisma` y ajustar el `datasource` para que apunte a SQLite en lugar de PostgreSQL.

**Cambiar esto:**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**Por esto:**
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

#### 3.2. Configurar la Variable de Entorno

Crear un archivo `.env` en la raíz del proyecto y definir la `DATABASE_URL` para que Prisma sepa dónde crear el archivo de la base de datos SQLite.

Copiar el siguiente contenido en tu archivo `.env`:

```env
# Database URL for Prisma (local SQLite setup)
DATABASE_URL="file:./dev.db"
```

#### 3.3. Sincronizar la Base de Datos

Con la configuración lista, necesitamos generar el cliente de Prisma y crear la base de datos SQLite con el esquema definido.

Ejecutar los siguientes comandos en orden:

1.  **Generar el cliente de Prisma:**
    ```bash
    npx prisma generate
    ```

2.  **Crear y sincronizar la base de datos:** Este comando creará el archivo `dev.db` y las tablas correspondientes.
    ```bash
    npm run prisma:push
    ```

### 4. Ejecutar el Proyecto

Finalmente, iniciar el servidor de desarrollo de NestJS.

```bash
npm run start:dev
```

La API estará disponible en [http://localhost:3001](http://localhost:3001).

---

## Tecnologías Utilizadas

- **Framework:** NestJS
- **Lenguaje:** TypeScript
- **ORM:** Prisma
- **Base de Datos (Producción):** PostgreSQL (Neon)
- **Base de Datos (Local):** SQLite
