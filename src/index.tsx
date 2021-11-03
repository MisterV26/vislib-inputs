import * as React from 'react'
import { Normal } from './fields/buttons'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}
  <Normal id="test btn" text="button"/>
  </div>
}
