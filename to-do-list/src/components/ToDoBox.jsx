import React from 'react';
import styled from "styled-components";

const Box = styled.div`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  margin: 30px;
  border: solid 2px darkseagreen;
  border-radius: 5px;
  width: 300px;
  height: 150px;
`

const Title = styled.div`
  font-size: 30px;
  font-family: "Helvetica Neue",serif;
`

const Content = styled.div`
  margin: 20px 0 0;
  font-size: 20px;
  font-family: "Helvetica Neue",serif;
`

function ToDoBox({title, content, }) {
    return (
        <Box>
            <div>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </div>
        </Box>
    );
}

export default ToDoBox;