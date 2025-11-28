import { CourseViewer } from "./course-viewer";

export const runtime = "edge";

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CourseViewerPage({ params }: PageProps) {
  const { courseId } = await params;
  return <CourseViewer courseId={courseId} />;
}
