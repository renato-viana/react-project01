import React from 'react';
import styled from 'styled-components';

// import './Person.css';
const StyledDiv = styled.div`
  .Person {
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
  }

  @media (min-width: 500px) {
    .Person {
      width: 450px;
    }
  }
`;

// Stateless (presentational component 'dumb')
const person = ({ name, age, children, click, changed }) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };
  return (
    //<div className="Person" style={style}>
    <StyledDiv>
      <p onClick={click}>
        I'm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </StyledDiv>
    //</div>
  );
};

export default person;
