import styles from './additional-info.module.scss';

/* eslint-disable-next-line */
export interface AdditionalInfoProps {}

export function AdditionalInfo(props: AdditionalInfoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdditionalInfo!</h1>
    </div>
  );
}

export default AdditionalInfo;
