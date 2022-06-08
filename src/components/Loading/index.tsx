import ReactLoading, { LoadingType } from 'react-loading'
import styles from './loading.module.scss'

const Loading = ({ type, color }: { type: LoadingType | undefined; color: string }) => {
  return (
    <div className={styles.container}>
      <ReactLoading type={type} color={color} className={styles.loading} />
    </div>
  )
}

export default Loading
