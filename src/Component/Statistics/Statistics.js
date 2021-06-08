import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends React.Component {
    static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    };
    
    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    };

    handleIncrementGood = (e) => {
        // const { name } = e.target;
        // this.setState((prevState) => ({
        //     [name]: prevState[name] + 1,
        //     }));
        this.setState(prevState => ({
           good: prevState.good + 1,
        }));
    };
    handleIncrementNeutral = (e) => {
        this.setState(prevState => ({
           neutral: prevState.neutral + 1,
        }));
    };
    handleIncrementBad = (e) => {
        this.setState(prevState => ({
           bad: prevState.bad + 1,
        }));
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
         return good + neutral + bad;
    };
    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100);
    };

    // const total = this.countTotalFeedback();

    render() {
        return (
            
            <div className={styles.statistics}>
                <h1 className={styles.title}>Please leave feedack</h1>

                <div>
                    <button type="button" className={styles.btn}
                    onClick={this.handleIncrementGood}>Good</button>
                    <button type="button" className={styles.btn}
                     onClick={this.handleIncrementNeutral}>Neutral</button>
                    <button type="button" className={styles.btn}
                     onClick={this.handleIncrementBad}>Bad</button>
                </div>

                <h2 className={styles.title}>Statistics</h2>

                <ul className={styles.list}>
                    <li className={styles.list_item}>Good: { this.state.good }</li>
                    <li className={styles.list_item}>Neutral:{ this.state.neutral }</li>
                    <li className={styles.list_item}>Bad: {this.state.bad}</li>
                    <li className={styles.list_item}>Total: { this.countTotalFeedback() }</li>
                    <li className={styles.list_item}>Positive feedback: {this.countPositiveFeedbackPercentage()} %</li>

                </ul>
          
            </div>)

    
    }
};


export default Statistics;