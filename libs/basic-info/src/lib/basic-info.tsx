import styles from './basic-info.module.scss';

/* eslint-disable-next-line */
export interface BasicInfoProps {}

export function BasicInfo(props: BasicInfoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BasicInfo!</h1>
    </div>
  );
}

export default BasicInfo;
