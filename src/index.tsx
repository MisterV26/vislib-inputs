import * as React from 'react'
import {Add, Danger, Delete, Next, Normal, Previous, Primary, Warning } from './fields/buttons'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}
  <Normal text="button" />
  <Previous id="test btn" text="previous" />
  <Next id="test btn" text="next" />
  <Warning id="test btn" text="warn" />
  <Danger id="test btn" text="danger" />
  <Add id="test btn" text="add" />
  <Primary id="test btn" text="prime" />
  <Delete id="test btn" text="delete" />
  </div>
}
