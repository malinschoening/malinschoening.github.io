import React from 'react'
import profile from './img/me.jpg'
import background from './img/background.png'
import styled from 'styled-components'

const FirstPage = () => {
  return (
    <Container>
        <HeaderImage src={background} />
        <TextContainer>
        {/* <LeftHeaderText><p>

        app.use(express.static('public'));<br/>
        app.use('/api/user', require('./routes/user_routes.js')<br/>
        );

        
        </p></LeftHeaderText> */}
        <HeaderInfoContainer>
          <HeaderText>Hello, my name is Malin Schoening</HeaderText>
          <HeaderInfo>A self-driven front-end developer. </HeaderInfo>
        </HeaderInfoContainer>
        {/* <RightHeaderText><p>
          
        &lt;Pressable onPress=&#10101;handleTrashButton&#10100; style=&#10101;<br/>
        &emsp;deleted <br/>
        &emsp;&emsp;? styles.hidden <br/>
        &emsp;&emsp;: pressed <br/>
        &emsp;&emsp;&emsp;? userID != data.user._id  <br/>
        &emsp;&emsp;&emsp;&emsp;? styles.hidden <br/>
        &emsp;&emsp;&emsp;&emsp;: styles.trashButton <br/>
        &emsp;&emsp;&emsp;: styles.hidden&#10100;/&gt;
          </p>
        </RightHeaderText> */}
        </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 10vh;
  margin-top: 15vh;
`;

const HeaderImage = styled.img`
  width: 90%;
  border-bottom: 5px solid black;

  @media only screen and (max-width: 1100px){
    width: 98%;
  }
`;

const HeaderText = styled.h1`
  text-align: center;
`;

const HeaderInfo = styled.h3`
  font-size: 25px;
  font-weight: normal;
  text-align: center;
`;

const HeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LeftHeaderText = styled.p`
  text-align: left;
  width: 30%;
`;

const RightHeaderText = styled.p`
  text-align: left;
  width: 30%;
`;

export default FirstPage
