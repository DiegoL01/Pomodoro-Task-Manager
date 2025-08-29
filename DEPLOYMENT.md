# Instrucciones de Despliegue en Vercel

## 1. Configurar Base de Datos PostgreSQL

### Opción A: Vercel Postgres (Recomendado)
1. Ve a tu proyecto en Vercel
2. En la pestaña "Storage", crea una nueva base de datos PostgreSQL
3. Copia la URL de conexión que te proporciona Vercel

### Opción B: Base de Datos Externa
- Puedes usar servicios como:
  - [Neon](https://neon.tech) (PostgreSQL serverless)
  - [Supabase](https://supabase.com) (PostgreSQL + Backend)
  - [PlanetScale](https://planetscale.com) (MySQL compatible)

## 2. Configurar Variables de Entorno en Vercel

En tu proyecto de Vercel, ve a Settings > Environment Variables y añade:

```
DATABASE_URL=postgresql://username:password@host:port/database
```

## 3. Desplegar

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El build incluirá `prisma generate` automáticamente
4. Después del despliegue, ejecuta la migración de la base de datos

## 4. Ejecutar Migraciones

Después del primer despliegue, ejecuta:

```bash
# En tu máquina local, conectado a la base de datos de producción
npx prisma migrate deploy
```

O si prefieres hacer push directo:

```bash
npx prisma db push
```

## 5. Verificar

- Las rutas API deberían funcionar correctamente
- La base de datos debería estar conectada
- Los usuarios pueden registrarse e iniciar sesión
- Las tareas se pueden crear, editar y eliminar

## Notas Importantes

- **No uses SQLite en producción** - Vercel no persiste archivos
- **PostgreSQL es requerido** para el despliegue en Vercel
- **Las migraciones** deben ejecutarse después del primer despliegue
- **Variables de entorno** deben configurarse en Vercel, no en archivos .env 