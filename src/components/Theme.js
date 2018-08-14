import React from 'react';
import styled from 'styled-components';


export const bodyColor = 'rgba(0, 0, 0.7)';
export const headerHeight = 70;
export const primaryColor = '#2ecc71';
export const dangerColor = '#e67e22';
export const borderColor = 'rgba(0,0,0,0.07)';
export const containerMaxWidth = '1200';

export const AppWrapper = styled.div `

`
export const Header = styled.div `
    border-bottom: 1px solid ${borderColor};
    height: ${headerHeight}px;
`

export const Container = styled.div `
max-width: ${containerMaxWidth}px;
margin: 0 auto;
`

export const Main = styled.div `
padding: 20px 0;
`

export const Footer = styled.div `
border-top: 1px solid ${borderColor};
padding: 10px 0;
`

export const Copyright = styled.p `
font-size: 12px;
text-align: center;
`

export const HeaderTitle = styled.div `
font-size: 30px;
font-weight: 800;
line-height: ${headerHeight}px;
flex-grow: 1;
text-align: center;
color: rgba(0,0,0.8);
`

export const HeaderUserMenu = styled.div `
width: 50px;
display: flex;
align-items: center;
`

export const HeaderWrapper = styled.div `
display: flex;`

export const HeaderUserAvatar = styled.img `
    border-radius: 50%;
    width: 30px;
    height: 30px;
`

export const LiveWrapper = styled.div `

`

export const HomeWrapper = styled.div `

`
export const PlayerWrapper = styled.div `
position: relative;
`

export const PlayerInner = styled.div `

`