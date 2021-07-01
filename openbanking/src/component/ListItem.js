import React from 'react'
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #ffcfcf;
    background: #dfdfdf;
    border-radius: 0.3rem;
`;

const Circle = styled.div`
    width: 10rem;
    height: 10rem;
    background: #dfdfdf;
    border-radius: 50%;
`;

export const ListItem = ({ user }) => {
    return (
        <Circle>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.height}</h3>
        </Circle>
    );
};

export default ListItem;