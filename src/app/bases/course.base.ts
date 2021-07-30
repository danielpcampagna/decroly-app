export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  workload: string;
  videosDuration: number;
  image: string;
  instructorId: number;
  available: boolean;
  wordpressId: string;
  releasedAt: string;
  createdAt: string;
  updatedAt: string;
  instructor: {
    id: number;
    userId: number;
    name: string;
    description: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
  },
  edools: {
    course: number;
  },
  name: string;
  duration: string;
}
