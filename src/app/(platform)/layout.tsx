import { Sidebar } from "@/components/lms/sidebar";
import { PlatformHeader } from "@/components/lms/platform-header";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      {/* Responsive margin: no margin on mobile (sidebar slides over), margin on desktop */}
      <div className="lg:ml-64 transition-all duration-300">
        <PlatformHeader />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
