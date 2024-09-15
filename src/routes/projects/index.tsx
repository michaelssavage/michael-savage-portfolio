import { sortById } from "@/assets/utils";
import { Picture } from "@/components/Picture";
import styles from "@/styles/projects.module.scss";
import type { IPosts } from "@/types/Post";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: Projects,
});
const { projects }: IPosts = import.meta.env.POSTS;

function Projects() {
  return (
    <main className="container">
      <div className="row">
        {projects.sort(sortById).map((project) => (
          <div className="col" key={project.id}>
            <Link to={project.slug} className={styles.projectImg}>
              <div className={styles.wrap}>
                <Picture
                  src={`src/assets/${project.image}`}
                  alt={project.title}
                />
                <p className={styles.view}>View More</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
