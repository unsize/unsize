import styled from 'styled-components';
import { BackButton, ProfileArea } from 'style';
import { elemSpacingXs, elemSpacingSm, elemSpacingMd } from 'style/constants';
import { goBack } from 'route-lite';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.includeBack ? 'space-between' : 'flex-end'};
  padding: ${elemSpacingSm} ${elemSpacingMd} 0;
`;

export default class BackProfileHeader extends React.Component {
  render() {
    let { includeBack } = this.props;
    let back = includeBack ? <BackButton onClick={goBack} /> : null;
    return (
      <HeaderContainer includeBack={includeBack}>
        { back }
        <ProfileArea {...this.props} />
      </HeaderContainer>
    );
  }
}
