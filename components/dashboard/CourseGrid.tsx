import CourseCard from "./CourseCard";
import { Course } from "@/types/course";

interface Props {
  courses: Course[];
}

export default function CourseGrid({
  courses,
}: Props) {
  return (
    <>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </>
  );
}