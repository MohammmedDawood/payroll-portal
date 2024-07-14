import styled from "styled-components";

export const TableWrapper = styled.div`
  border-radius: 10px;
  > div {
    border: none;
  }

  table {
    thead {
      border-radius: 10px;
      tr {
        th {
          padding-block: 15px;
          border-bottom: none;
          div {
            text-align: right;
            font-size: 12px;
            text-transform: capitalize;
            p {
              text-align: right;
              font-size: 13px;
              text-transform: capitalize;
            }
            &:lang(en) {
              text-align: left;
              p {
                text-align: left;
              }
            }
          }
          .mantine-Checkbox-root {
            .mantine-Checkbox-body {
              input {
                &:checked {
                }
              }
              svg {
                rect {
                }
              }
            }
          }
        }
      }
    }
    tbody {
      .ActionIcon {
        svg {
        }
        cursor: pointer;
      }

      .MenuItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: right;
        gap: 5px;
        &:hover {
          z-index: 999;
        }

        > div {
          > div {
            display: grid;
            grid-template-columns: 1fr 18px;
            grid-template-rows: 1fr;
            > span {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 14px;
              font-weight: 400;
              line-height: 26px;
              letter-spacing: 0em;
              text-align: right;
              gap: 5px;

              svg {
                font-size: 20px;
              }
            }
          }
        }

        .truncate-overflow {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .mantine-Menu-dropdown {
        border-radius: 16px;
        padding-block: 8px;
        padding-inline: 0px;
        max-width: 200px;
      }

      .mantine-Menu-arrow {
        border-radius: 25% !important;
        background-color: white;
        border-width: 10px;
        border-color: black;
        width: 0px !important;
        height: 0px !important;
      }

      tr {
        td {
          font-size: clamp(9px, 5vw, 13px);
          white-space: nowrap;
          text-transform: capitalize;
          .mantine-Checkbox-root {
            .mantine-Checkbox-body {
              input {
                &:checked {
                }
                svg {
                  rect {
                  }
                }
              }
            }
          }
        }
        &:nth-of-type(odd) {
          &:hover {
            background-color: #f1f3f5 !important;
          }
        }
        &:last-of-type {
          td {
          }
        }
      }
    }
  }
  .mantine-ooem79 {
    .mantine-Group-root {
      direction: ltr;
      button.mantine-Pagination-control {
        svg {
          path {
            font-size: 15px;
          }
        }
        &:not([data-disabled]) {
          transform: translateY(0rem);
          &:hover {
            background-color: inherit;
          }
        }
        &[data-active] {
          border-radius: 20px;
          &:hover {
            border-radius: 20px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .mantine-ScrollArea-root {
      max-width: 90vw;
      overflow-x: auto;
      margin: auto;
    }
  }
`;

export const TableHead = styled.p`
  font-size: 16px;
`;

export const ModuleWrapper = styled.section`
  border-radius: 16px 16px 0 0;
  padding: 21px 24px;
`;
