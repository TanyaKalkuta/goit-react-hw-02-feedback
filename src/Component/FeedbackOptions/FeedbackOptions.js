import React from 'react';
import styles from './FeedbackOptions.module.css';
import Section from '../Section/Section';

const FeedbackOptions = ({onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad}) => (
    <Section title="Please leave feedback">

        <div>
            <button type="button" className={styles.btn}
                onClick={onLeaveFeedbackGood}>Good</button>
            <button type="button" className={styles.btn}
                onClick={onLeaveFeedbackNeutral}>Neutral</button>
            <button type="button" className={styles.btn}
                onClick={onLeaveFeedbackBad}>Bad</button>
        </div>
    </Section>
    
);

export default FeedbackOptions;