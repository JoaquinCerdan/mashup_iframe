import logo_caixa from '../../img/icons/logo-caixa.svg';
import chart_svg from '../../img/icons/chart-line-solid.svg';
import calendar_svg from '../../img/icons/calendar-regular.svg';
import pin_svg from '../../img/icons/thumbtack-solid.svg';
import users_svg from '../../img/icons/users-solid.svg';
import logo_mis_clientes from '../../img/icons/logo-misclientes.png'
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Drawernavbar.css';
import PropTypes from 'prop-types';

const icons = {
  chart_svg: chart_svg,
  calendar_svg: calendar_svg,
  pin_svg: pin_svg,
  users_svg: users_svg,
};

function Drawernavbar(props) {
  const [titlePage, setTitlePage] = useState('Clientes');
  const [showSidebarFilters, setShowSidebarFilters] = useState(false);
  const [activePage, setActivePage] = useState(undefined);

  window.document.title = titlePage;

  useEffect(() => {
    props.content.forEach(item => {
      if (window.location.href.includes(item.href)) {
        setActivePage(item);
        setTitlePage(item.titlePage);
      }

      if (item.childs) {
        item.childs.forEach(item2 => {
          if (window.location.href.includes(item.href + item2.href)) {
            setActivePage(item2);
            setTitlePage(item2.titlePage);
          }
        });
      }
    });
  }, []);

  function setActiveMenu(page) {
    setActivePage(page);
    setTitlePage(page.titlePage);
  }

  return (
    <>
      <div className="sidebar">
        <div className="container-logo-title">
          <img
            src={logo_caixa}
            alt="Not found."
            className="logo-caixa"
          ></img>
          
          <span className="bar"></span>
          <i className="fa fa-users" aria-hidden="true"></i>
          <img
            src={logo_mis_clientes}
            alt="Not found."
            title="Logo Mis Clientes"
            className="logo-misclientes"
          />
          <span className="title-name" title="titulo">
            Mis Clientes
          </span>
          <span className="bar"></span>
          <span className="title-page" title="nombre pagina">
            {titlePage}
          </span>
        </div>
        {/* <div className="menu d-flex">
          <SidebarLinks
            {...props}
            menuCallback={setActiveMenu}
            activePage={activePage}
          />
        </div> */}
      </div>
    </>
  );
}

function SidebarLinks(props) {
  return (
    <nav className="menu-links">
      <ul className="link">
        {props.content.map((page, index) => {
          return (
            <li key={index}>
              {!page.childs ? (
                <NavLink
                  to={page.href}
                  onClick={() => {
                    props.menuCallback(page);
                  }}
                  className={
                   page === props.activePage
                      ? 'active link-a'
                      : 'link-a'
                  }
                  
                >
                  {page.icon in icons ? (
                    <img
                      className="link-icon"
                      src={icons[page.icon]}
                      alt="Not found."
                    />
                  ) : (
                    <i className={page.icon} aria-hidden="true"></i>
                  )}
                  <span>{page.label}</span>
                </NavLink>
              ) : (
                <div className="menu-item">
                  <div
                    className={
                      page.childs.find(a => a === props.activePage)
                        ? 'active item'
                        : 'item'
                    }
                  >
                    {page.icon in icons ? (
                      <img
                        className="link-icon"
                        src={icons[page.icon]}
                        alt="Not found."
                      />
                    ) : (
                      <i className={page.icon} aria-hidden="true"></i>
                    )}
                    <span>{page.label}</span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div className="dropdown-childs">
                    <div className="list-childs">
                      <ul className="link-childs">
                        {page.childs.map((child, index) => {
                          return (
                            <li
                              key={index}
                              className={
                                props.activePage &&
                                child &&
                                props.activePage.label === child.label
                                  ? 'child-li selected'
                                  : 'child-li'
                              }
                            >
                              <NavLink
                                to={page.href + child.href}
                                onClick={e => {
                                  if (!child.enabled) {
                                    e.preventDefault();
                                  } else {
                                    props.menuCallback(child);
                                  }
                                }}
                                className={child.enabled ? '' : 'disabled'}
                              >
                                <div className="label-wrapper">
                                  <span>{child.label}</span>
                                </div>
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Drawernavbar.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
};

SidebarLinks.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
  menuCallback: PropTypes.func.isRequired,
  activePage: PropTypes.any,
};

export default Drawernavbar;
