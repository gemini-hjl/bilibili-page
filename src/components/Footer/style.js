import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: #a3c4d3;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  /* border-top: 1px solid black; */
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    &.active {
      color: pink;
    }
    i {
      font-size: 1.6em;
    }
  }
`