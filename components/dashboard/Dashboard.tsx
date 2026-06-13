import Sidebar from "./Sidebar";
import HeroTile from "./HeroTile";
import CourseGrid from "./CourseGrid";
import ActivityTile from "./ActivityTile";
import BottomNav from "./BottomNav";
import AnimatedContainer from "../ui/AnimatedContainer";

import { Course } from "@/types/course";

interface DashboardProps {
  courses: Course[];
}

export default function Dashboard({
  courses,
}: DashboardProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-6">

          <AnimatedContainer>

            <section
              className="
                grid
                gap-6
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                auto-rows-[220px]
              "
            >
              <HeroTile />

              <CourseGrid courses={courses} />

              <ActivityTile />

            </section>

          </AnimatedContainer>

        </main>

      </div>

      <BottomNav />

    </div>
  );
}