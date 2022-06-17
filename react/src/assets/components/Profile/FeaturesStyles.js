import styled from 'styled-components';
import H1 from '../styled/H1.styled';
import S1 from '../styled/S1.styled';
import { Colors } from '../../Theme';

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: row ;
	justify-content: space-around;
`;

export const ContentColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ImgWrapper = styled.div`
	display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`;

export const TopLine = styled(S1)`
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: ${Colors.Brand.Button} ;
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
	z-index: 1;
`;

export const Heading = styled(H1)`
	margin-bottom: 24px;
	line-height: 1.1;
	color: ${Colors.Brand.Text};
`;

export const Subtitle = styled(S1)`
	max-width: 440px;
	margin-bottom: 35px;
	color: ${Colors.Brand.Text};
`;