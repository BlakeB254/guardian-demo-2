import { CourseViewer } from "./course-viewer";

// Generate static params for demo course IDs
export function generateStaticParams() {
  return [
    { courseId: 'fundamentals' },
    { courseId: 'advanced' },
    { courseId: 'hospitality' },
    { courseId: '1' },
    { courseId: '2' },
  ];
}

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CourseViewerPage({ params }: PageProps) {
  const { courseId } = await params;
  return <CourseViewer courseId={courseId} />;
}
