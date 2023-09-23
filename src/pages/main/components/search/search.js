import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPrase}
				placeholder="Поиск по заголовкам..."
				onChange={onChange}
			/>
			<Icon inactive={true} id="fa-search" size="21px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 340px;
	height: 40px;
	margin: 40px auto 0;
	border: 1px solid #000;

	& > input {
		padding: 10px 32px 10px 10px;
	}

	& > div {
		position: absolute;
		top: 3px;
		right: 9px;
	}
`;

Search.propTypes = {
	searchPrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
