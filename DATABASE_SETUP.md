# Configuración Dual de Base de Datos

## 🗄️ **Configuración Actual:**

### **Desarrollo Local (SQLite):**
- **Archivo:** `prisma/schema.sqlite.prisma`
- **Base de datos:** `./prisma/dev.db`
- **Comando:** `npm run db:dev`

### **Producción (Neon PostgreSQL):**
- **Archivo:** `prisma/schema.prisma`
- **Base de datos:** Neon (PostgreSQL)
- **Comando:** `npm run db:prod`

## 🚀 **Comandos Disponibles:**

### **Para Desarrollo Local (SQLite):**
```bash
# Crear/actualizar base de datos SQLite
npm run db:dev

# Abrir Prisma Studio con SQLite
npm run db:studio:dev
```

### **Para Producción (Neon):**
```bash
# Crear/actualizar base de datos Neon
npm run db:prod

# Abrir Prisma Studio con Neon
npm run db:studio:prod
```

### **Comandos Generales:**
```bash
# Generar cliente Prisma
npx prisma generate

# Ejecutar migraciones
npm run db:migrate

# Ejecutar seed
npm run db:seed
```

## 🔧 **Configuración de Variables de Entorno:**

### **Archivo .env (desarrollo local):**
```env
DATABASE_URL="postgresql://neondb_owner:npg_OUJ3goa1sAWb@ep-late-haze-adukc0mp-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
NODE_ENV="development"
```

### **Vercel (producción):**
```env
DATABASE_URL="postgresql://neondb_owner:npg_OUJ3goa1sAWb@ep-late-haze-adukc0mp-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
NODE_ENV="production"
```

## 📋 **Pasos para Configurar Neon:**

1. **Verificar conexión:**
```bash
npm run db:prod
```

2. **Si hay errores, verificar:**
   - URL de conexión correcta
   - Credenciales válidas
   - Base de datos creada en Neon

3. **Crear tablas en Neon:**
```bash
npx prisma db push --schema=./prisma/schema.prisma
```

## 🎯 **Uso en Código:**

### **Importación Automática:**
```typescript
import { prisma } from '@/src/lib/prisma-dual'
// Automáticamente usa SQLite en desarrollo y Neon en producción
```

### **Selección Manual:**
```typescript
import { getPrismaClient } from '@/src/lib/prisma-dual'

const prisma = getPrismaClient(process.env.NODE_ENV === 'production')
```

## ⚠️ **Notas Importantes:**

- **Desarrollo:** Usa SQLite para velocidad y simplicidad
- **Producción:** Usa Neon (PostgreSQL) para escalabilidad
- **Migraciones:** Ejecuta en ambas bases de datos por separado
- **Datos:** Las bases de datos son independientes 