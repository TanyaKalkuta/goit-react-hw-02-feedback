import React from 'react';
import styles from './Statistics.module.css';
import Section from '../Section/Section';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <Section title="Statistics">

        <ul className={styles.list}>
            <li className={styles.list_item}>Good: {good}</li>
            <li className={styles.list_item}>Neutral:{neutral}</li>
            <li className={styles.list_item}>Bad: {bad}</li>
            <li className={styles.list_item}>Total: {total}</li>
            <li className={styles.list_item}>Positive feedback: {positivePercentage} %</li>
        </ul>
    </Section>
);


export default Statistics;