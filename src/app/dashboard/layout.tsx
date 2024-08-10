// Sidebar layout for admin page.

// Components
import AdminButton from "@/components/buttons/AdminButton";
import Image from "next/image";

// Icon components
import { MdDashboard } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <aside className="fixed h-screen w-1/12 min-w-[10rem] bg-primary-foreground col-container justify-between gap-3">
        <section className="col-container">
          <Image src="/logo.png" width={500} height={500} alt="logo" />
          <AdminButton
            text="DASHBOARD"
            icon={<MdDashboard />}
            destination="/dashboard"
          />
          <AdminButton
            text="EXPERIENCE"
            icon={<MdGroups />}
            destination="/dashboard/experiences"
          />
          <AdminButton
            text="PROJECTS"
            icon={<FaCode />}
            destination="/dashboard/projects"
          />
        </section>
        <footer>
          <AdminButton
            className="border border-secondary"
            text="SIGN-OUT"
            icon={<CgLogOut />}
            destination="/"
          />
        </footer>
      </aside>
      <div className="page-container col-container items-center justify-center">
        {children}
      </div>
    </div>
  );
}
