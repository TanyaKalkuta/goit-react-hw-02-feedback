import React from 'react';
import Statistics from './Component/Statistics/Statistics';
import Panel from './Component/Panel/Panel';
import Container from './Component/Container/Container';


const App = () => {
  return (
    <Container>         
      <Panel>
         <Statistics 
          title="Please leave feedack"
          // good={good}
          // neutral={neutral}
          // bad={bad}
          // total={total}
          // positivePercentage={positivTotal}
         />
      </Panel> 
      </Container>
      
  );
};

export default App;
