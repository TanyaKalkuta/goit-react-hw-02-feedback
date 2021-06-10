import React from 'react';
import styles from './FeedbackOptions.module.css';
import Section from '../Section/Section';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <Section title="Please leave feedback">

        <div>
            {options.map((options, idx) => 
            <button
                key={idx}            
                type="button"
                className={styles.btn}
                onClick={onLeaveFeedback}
                name={options}
                
            >{options}</button>)}
                        
        </div>
    </Section>
    
);

export default FeedbackOptions;