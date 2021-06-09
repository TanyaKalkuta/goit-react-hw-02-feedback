import React from 'react';
import PropTypes from 'prop-types';
import Container from './Component/Container/Container';
import Statistics from './Component/Statistics/Statistics';
import FeedbackOptions from './Component/FeedbackOptions/FeedbackOptions';


class App extends React.Component {
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

    handleIncrementGood = () => {       
           this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };
    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
    handleIncrementBad = () => {
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

  render() {
     
    // const { good, neutral, bad } = this.state;
    return (
      
      <Container>
        <FeedbackOptions
         onLeaveFeedbackGood={this.handleIncrementGood}
         onLeaveFeedbackNeutral={this.handleIncrementNeutral}
         onLeaveFeedbackBad={this.handleIncrementBad}/>

       <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />

        </Container>
    )
  };  
};

export default App;
