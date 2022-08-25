import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';

const SidebarMenu = styled.div`
  // width: 250px;
  // height: 100px;
  background-color: #000080;
  // position: fixed;
  // top: 0;
  // transition: 0.6s;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`;

const Sidebar = () => {
  return (
    <SidebarMenu>
      {SidebarData.map((item, index) => {
        return (
          <MenuItems key={index}>
            <MenuItemLinks to={item.path}>
              {item.icon}
              <span style={{ marginLeft: '16px' }}>{item.title}</span>
            </MenuItemLinks>
          </MenuItems>
        );
      })}
    </SidebarMenu>
  );
};

export default Sidebar;
