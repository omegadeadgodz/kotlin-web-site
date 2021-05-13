import * as styles from './brand.css'

const projects = {
    kotlin: 'https://kotlinlang.org/',
    play: 'https://play.kotlinlang.org',
};

export default function Brand({project, version, url}) {
    if (!projects[project]) {
        project = 'kotlin';
    }

    const isDefault = project !== 'kotlin' || true;

    const rootClassName = [
        styles.wrap,
        styles[`warp${project[0].toUpperCase()}${project.substring(1)}`],
        isDefault ? styles.warpWithProject : '',
    ].join(' ');

    return (
        <div data-nosnippet="true" className={rootClassName}>
            <a className={styles.logo} href={projects['kotlin']}>Logo</a>
            <a className={styles.name} href={projects[project]}>{project}</a>
            { !isDefault && <a className={styles.version} href={url} target="_blank">{version}</a> }
        </div>
    );
}
