import styles from './shared-interface.module.scss';

/* eslint-disable-next-line */
export interface SharedInterfaceProps {}

export function SharedInterface(props: SharedInterfaceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedInterface!</h1>
    </div>
  );
}

export default SharedInterface;
