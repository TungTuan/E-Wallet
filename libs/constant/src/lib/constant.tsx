import styles from './constant.module.scss';

/* eslint-disable-next-line */
export interface ConstantProps {}

export function Constant(props: ConstantProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Constant!</h1>
    </div>
  );
}

export default Constant;
