import styles from './shared-constant.module.scss';

/* eslint-disable-next-line */
export interface SharedConstantProps {}

export function SharedConstant(props: SharedConstantProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedConstant!</h1>
    </div>
  );
}

export default SharedConstant;
