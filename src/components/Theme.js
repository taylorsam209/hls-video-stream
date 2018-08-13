import React from 'react';
import styled from 'styled-components';

export const AppWrapper = styled.div `
background: red;
`
// export const PageTitle = styled.h1 `
// font-size: 30px;
// `

export const bodyColor = 'rgba(0, 0, 0.7)';
export const headerHeight = 70;
export const primaryColor = '#2ecc71';
export const dangerColor = '#e67e22';

export const Header = styled.div `
    border-bottom: 1px solid ${bodyColor};
    height: ${headerHeight}px;
`