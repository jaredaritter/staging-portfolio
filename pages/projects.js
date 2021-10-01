import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/projects.module.css';
import { getProjectData } from '../lib/projects';
import Sidebar from '../components/sidebar';
import ProjectList from '../components/project-list';

export default function Projects({ allProjectData }) {
  const { projects } = allProjectData;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.projectsContainer}>
        <Sidebar projects={projects} />
        <div className={styles.main}>
          <h2 className={utilStyles.centerText}>Projects</h2>
          <div className={utilStyles.centerText}>
            <p>Under Contruction</p>
          </div>
          <ProjectList projects={projects} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjectData = getProjectData();
  return {
    props: {
      allProjectData,
    },
  };
}
