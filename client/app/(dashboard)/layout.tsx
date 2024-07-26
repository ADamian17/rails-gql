// import LogoutCta from "@/components/LogoutCta/LogoutCta";
import { DashboardLayout } from "@/layouts/DashboardLayout/DashboardLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}