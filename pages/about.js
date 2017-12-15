import React from 'react';
import Layout from '../components/Layout';
import { Row, Col } from 'react-flexbox-grid-plus';
import ContentContainer from '../components/ContentContainer';
import { H1, H6, P } from 'style';
import styled from 'styled-components';

const RowWrapper = styled.div`
  height: 500px;
  @media (max-width: 768px) {
    height: 700px;
  }
`;

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <RowWrapper>
          <Row style={{ height: 'inherit' }}>
            <ContentContainer
              img="/static/images/about.png"
              x={[1, 0, 0, 1]}
              y={[0, 0, 0, 0]}
              z={[1, 1, 1, 1]}
              width={[4, 5, 6, 10]}
              height={[9, 10, 10, 12]}
            />
            <Col
              lgWidth={5}
              smWidth={5}
              xsWidth={10}
              lgXOffset={6}
              smXOffset={7}
              xsXOffset={1}
              xsYOffset={13}
            >
              <H1>About Unsize</H1>
              <H6>
                Unsize sprouted from the idea that everyone has the right to
                find a fit that makes them feel good!
              </H6>
              <P small>
                Throughout the years, the ready to wear clothing industry has
                asked us to “fit in, to stand out” in order to love ourselves,
                but it has never consistently guaranteed that clothes will fit
                the way they were meant to. In an age where we can customize
                almost anything, conviently finding your size when shopping
                online has yet to become accessible to the average consumer, and
                it is not for lack of demand.
              </P>
              <P small>
                In a market space of 30 million bodies to clothe and a 2 billion
                dollar market opportunity size, unsize uses the intersection of
                technology and design to provide immediate services to find
                customers clothes that fit and feel good.
              </P>
            </Col>
          </Row>
        </RowWrapper>
      </Layout>
    );
  }
}
