import React from 'react';
import PropTypes from 'prop-types';
import Container from './Component/Container/Container';
import Statistics from './Component/Statistics/Statistics';
import FeedbackOptions from './Component/FeedbackOptions/FeedbackOptions';
import Notification from './Component/Notification/Notification'

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

    handleIncrement = (e) => {
      const { name } = e.target;
           this.setState((prevState) => ({
            [name]: prevState[name] + 1,
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
     
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const keys = Object.keys(this.state);
    return (
      
      <Container>
        <FeedbackOptions
         options={keys}
         onLeaveFeedback={this.handleIncrement}
        />
        
        {total ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
        ) : (
            <Notification
              message="No feedback given"
            />
        )
        }  

        </Container>
    )
  };  
};

export default App;
