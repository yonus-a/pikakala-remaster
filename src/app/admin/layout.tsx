import AdminNavbar from "@/components/admin/navbar";
import { LayoutType } from "@/types/general";
import "../../styles/panel-layout.scss";

export default function AdminLayout({ children }: LayoutType) {
  return (
    <div className="admin-layout">
      <div className="main-content">{children}</div>
      <AdminNavbar />
    </div>
  );
}
