import styles from './purpose.module.scss';

/* eslint-disable-next-line */
export interface PurposeProps {}

export function Purpose(props: PurposeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Purpose!</h1>
    </div>
  );
}

export default Purpose;
