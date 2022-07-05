import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  padding-bottom: 54px;
  .container {
    column-count: 2;
    column-gap: 10px;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    .good-box { 
      width: 100%;
      break-inside: avoid;
      margin: 10px auto;
      border-radius: 4px;
      box-shadow: rgba(255, 255, 255, 0.2) 2px 2px 2px;
      background-color: #fff;
      .good-img {
        width: 100%;
        img {
          border-radius: 4px;
          width: 100%;
        }
      }
      .title {
        span:first-child {
          background: rgba(50, 50, 50, 0.1);
          border-radius: 4px;
          font-size: 12px;
          margin: 2px;
          padding: 1px;
        }
        span:nth-child(2) {
          font-style: oblique;
          padding: 2px;
          font-size: 14px;
          font-weight: 600;
        }
      }
      .rank_time {
        span:first-child {
          background-color: orange;
          border-radius: 4px;
          padding: 1px;
          font-size: 12px;
        }
        span:nth-child(2) {
          margin-left: 10px;
          font-size: 12px;
          border-radius: 4px;
          padding: 1px;
          background-color: skyblue;
        }
      }
      .price_coll {
        display: flex;
        justify-content: space-between;
        span:first-child {
          padding: 8px;
          font-size: 18px;
          font-weight: 600;
        }
        span:nth-child(2) {
          padding: 10px;
          font-size: 14px;
        }
      }
    }
  }
`