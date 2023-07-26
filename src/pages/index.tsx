import { Contacts } from "components/contacts";
import { NowPlaying } from "components/spotify";
import styles from "styles/page.module.scss";
import { Layout } from "components/layout";
import { achievements, AchievementsProp } from "utils/achievements";

export default function Home() {
  return (
    <Layout title="Michael Savage Portfolio">
      <section className={styles.main}>
        <h1>Michael Savage</h1>
        <p className={styles.opener}>
          Hey, I'm a Software Developer with Jaguar Land Rover, Ireland. I love
          to learn new and exciting technologies and want to pursue full stack
          development.
        </p>

        <Contacts />

        <div className={styles.sectionSpace}>
          <h2>About</h2>
          <p className={styles.aboutText}>
            I love to work with NextJS, ReactJS and Typescript for frontend
            development and Java/ Spring Boot for backend work. I've experience
            with CI/CD, Python, APIs and UI/UX that I want to continue to
            develop. Outside of work, I'm passionate about all things music,
            movies, sports, and travelling.
          </p>
        </div>

        <div className={styles.sectionSpace}>
          <h2>What Am I Listening To?</h2>
          <NowPlaying />
        </div>

        <div className={styles.sectionSpace}>
          <h2>Personal Achievements</h2>
          <p>
            Bsc. Computer Applications from Dublin City University (2017 -
            2021).
          </p>
          {achievements.map((achievement: AchievementsProp) => (
            <div key={achievement.year}>
              <h3>{achievement.year}</h3>
              <ul>
                {achievement.group.map((sentence) => (
                  <li key={sentence.id}>{sentence.val}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
