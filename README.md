

# 📚 Pomodoro Task Manager 

[Enlace al proyecto](https://pomodoro-task-manager-dl01.vercel.app/)

**Pomodoro Task Manager** no es solo un CRUD de tareas; es una herramienta de productividad integral diseñada para combatir la procrastinación. Combina la gestión eficiente de tareas con la técnica Pomodoro, permitiendo a los usuarios no solo organizar sus pendientes, sino ejecutar su trabajo con un enfoque profundo de 25 minutos.

---

## 🚀 Características Principales

* **Gestión Completa (CRUD):** Crear, editar, visualizar y eliminar tareas de forma intuitiva.
* **Sistema de Autenticación:** Registro e inicio de sesión seguro utilizando `bcryptjs` para el hash de contraseñas.
* **Temporizador Pomodoro Integrado:** Cada tarea cuenta con un timer preconfigurado (25/5 min) para maximizar la concentración.
* **Arquitectura Escalable:** Uso de Context API para una gestión de estado global fluida entre el usuario, el temporizador y las tareas.
* **Interfaz Ultra-Moderna:** Estilizado con Tailwind CSS 4 y animaciones fluidas mediante `Framer Motion`.

---

## 🛠️ Stack Tecnológico

### Frontend

* **Next.js 15 (App Router):** Utilizando las últimas capacidades de Server y Client Components.
* **Framer Motion:** Para transiciones suaves y una experiencia de usuario (UX) premium.
* **Lucide React:** Iconografía minimalista y consistente.

### Backend & Base de Datos

* **Prisma ORM:** Modelado de datos robusto y consultas seguras.
* **Neon Database:** Base de datos Postgres Serverless para una baja latencia y alta disponibilidad.
* **Bcryptjs:** Implementación de seguridad para la protección de credenciales de usuario.

---

## 🏗️ Arquitectura de Datos

El sistema se basa en una relación de **uno a muchos** entre Usuarios y Tareas, garantizando que cada usuario tenga su espacio de trabajo privado y seguro.

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  tasks     Task[]   // Relación con tareas
}

model Task {
  id          String   @id @default(cuid())
  title       String
  completed   Boolean  @default(false)
  userId      String   // Foreign Key
}

```

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/pomodoro-task-manager.git

```


2. **Instalar dependencias:**
```bash
npm install

```


3. **Configurar variables de entorno (`.env`):**
Crea un archivo `.env` en la raíz y añade tus credenciales de Neon:
```env
DATABASE_URL="postgres://user:password@host/neondb?sslmode=require"
DIRECT_URL="postgres://user:password@host/neondb?sslmode=require"

```


4. **Sincronizar la base de datos:**
```bash
npm run db:push

```


5. **Ejecutar en desarrollo:**
```bash
npm run dev

```



---

## 🧠 Desafíos Técnicos y Aprendizajes

Durante el desarrollo de este proyecto, se resolvieron retos clave de ingeniería de software:

* **Sincronización del Timer:** Implementación de un `useEffect` optimizado para el cronómetro, evitando fugas de memoria y reinicios innecesarios mediante el uso de `useCallback`.
* **Hydration Mismatch:** Resolución de conflictos entre el renderizado del servidor y el cliente mediante estrategias de montaje (`mounted state`), asegurando una carga limpia de la UI.
* **Persistencia de Datos:** Integración de Prisma con adaptadores serverless para manejar conexiones eficientes en entornos de nube como Vercel.

---

## ✒️ Autor

**Diego** - [Mi GitHub](https://github.com/DiegoL01)

---



## 📸 Capturas

<div style="display: flex; gap: 8px; overflow-x: auto;">

  <img src="https://github.com/DiegoL01/Pomodoro-Task-Manager/blob/2d7cc527e97a5f007ab71233f3832f8303e739f2/public/Captura%20desde%202026-01-09%2022-08-18.png" width="300" />
  <img src="https://github.com/DiegoL01/Pomodoro-Task-Manager/blob/2d7cc527e97a5f007ab71233f3832f8303e739f2/public/Captura%20desde%202026-01-09%2022-08-18.png" width="300" />
  <img src="https://github.com/DiegoL01/Pomodoro-Task-Manager/blob/2d7cc527e97a5f007ab71233f3832f8303e739f2/public/Captura%20desde%202026-01-09%2022-08-18.png" width="300" />

</div>
