import React from 'react';
import styled from 'styled-components';

const Thumb = styled.div`
	position: relative;
	margin: 0;
	width: 100%;
	padding-top: 100%;
	border-radius: 3px;
	background: ${props => `url("${props.bg}")`};
	background-size: cover;
`;

const MediaTile = ({ data }) => {
	return <Thumb bg={data.cover_image} />;
};

export default MediaTile;
