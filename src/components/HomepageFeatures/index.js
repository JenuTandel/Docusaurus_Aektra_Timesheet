import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
Aekatra is designed with a user-friendly interface, ensuring a smooth and intuitive experience for everyone. Whether you’re an Employee, HR, or Manager, navigating through features like project management, payroll, leave tracking, and attendance is effortless. With a clean design and minimal learning curve, Aekatra helps you focus on your tasks without any hassle.      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
Aekatra takes care of the complexities of HR, payroll, project management, and attendance, so you can concentrate on what truly matters—productivity, growth, and team success. Automate routine tasks, streamline approvals, and reduce manual work, allowing you to invest time where it counts.      </>
    ),
  },
  {
    title: 'Powered by 1Rivet',
    Svg: require('@site/static/img/react.svg').default,
    description: (
      <>
Built with innovation and reliability, Aekatra is proudly powered by 1Rivet. Our commitment to efficiency, security, and seamless user experience ensures that your workforce management is always in good hands.</>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
