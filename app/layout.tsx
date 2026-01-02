
import type { Metadata } from "next";
import { TaskProvider } from "@/src/contexts/TaskContext";
import { UserProvider } from "@/src/contexts/UserContext";
import { Header } from "@/src/components/Layaut/Header";
import { NetworkStatusModal } from "@/src/components/Layaut/NetworkStatusModal";
import "./globals.css";

 

export const metadata: Metadata = {
  title: "Notas + Pomodoro",
  description: "Notas + Pomodoro",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="es" translate="no">

      <body className="antialiased">
        <UserProvider>
          <TaskProvider>
            <Header />
            {children}
            <NetworkStatusModal/>
          </TaskProvider>
        </UserProvider>
      </body>
    </html>
  );
}
