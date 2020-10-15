import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    max-width: 90vw;
    width: 640px;

    margin-top: 12px;
    background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 24px;
    padding-top: 22px;
    position: relative;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding-inline-start: 0;

  li{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const Topo = styled.div`
    background-color: rgb(219, 68, 55);
    color: rgba(255, 255, 255, 1);

border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 10px;
    left: -1px;
    position: absolute;
    top: -1px;
    width: calc(100% + 2px);
`;

export const ButtonTrash = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid rgba(219, 68, 55, 0.5);
  background: transparent;
  margin-left: -76px;
  margin-right: 10px;
  transition: border-color 0.2s;

  :hover {
    border-color: rgb(219, 68, 55);
  }
`;

export const ButtonTrashSelect = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  border: 1px solid rgba(219, 68, 55, 0.5);
  background: transparent;
  margin-left: 6px;
  
  transition: border-color 0.2s;

  :hover {
    border-color: rgb(219, 68, 55);
  }
`;

export const DivTopo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DivExcluir = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  select{
    padding: 5px;

  }
`;
