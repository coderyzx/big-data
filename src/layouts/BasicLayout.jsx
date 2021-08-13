
 import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
 import React, { useEffect } from 'react';
//  import { Link, useIntl, connect, history } from 'umi';
 import { GithubOutlined } from '@ant-design/icons';
 import { Result, Button } from 'antd';
 import Authorized from '@/utils/Authorized';
 import RightContent from '@/pages/GlobalHeader/RightContent';
 import { getAuthorityFromRouter } from '@/utils/utils';
 import logo from '../assets/logo.png';

 const noMatch = (
   <Result
     status={403}
     title="403"
     subTitle="Sorry, you are not authorized to access this page."
     extra={
       <Button type="primary">
         <Link to="/user/login">Go Login</Link>
       </Button>
     }
   />
 );

 /**
  * use Authorized check all menu item
  */
 const menuDataRender = menuList =>
   menuList.map(item => {
     const localItem = {
       ...item,
       children: item.children ? menuDataRender(item.children) : undefined,
     };
     return Authorized.check(item.authority, localItem, null);
   });

 const defaultFooterDom = (
   <DefaultFooter
     copyright={`${new Date().getFullYear()} 蚂蚁集团体验技术部出品`}
     links={[
       {
         key: 'Ant Design Pro',
         title: 'Ant Design Pro',
         href: 'https://pro.ant.design',
         blankTarget: true,
       },
       {
         key: 'github',
         title: <GithubOutlined />,
         href: 'https://github.com/ant-design/ant-design-pro',
         blankTarget: true,
       },
       {
         key: 'Ant Design',
         title: 'Ant Design',
         href: 'https://ant.design',
         blankTarget: true,
       },
     ]}
   />
 );

 const BasicLayout = props => {
   const {
     dispatch,
     children,
     settings,
     location = {
       pathname: '/',
     },
   } = props;
   /**
    * constructor
    */

   useEffect(() => {
     if (dispatch) {
       dispatch({
         type: 'user/fetchCurrent',
       });
     }
   }, []);
   /**
    * init variables
    */

   const handleMenuCollapse = payload => {
     if (dispatch) {
       dispatch({
         type: 'global/changeLayoutCollapsed',
         payload,
       });
     }
   }; // get children authority

   const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
     authority: undefined,
   };
   const { formatMessage } = useIntl();
   return (
     <ProLayout
       logo={<img
         alt="logo"
         style={{ height: '32px' }}
         src={logo}
         onClick={() => {
           handleMenuCollapse(!props.collapsed);
         }}
       />}
       title="my new ant pro project"
       layout="topmenu"
       disableMobile
       rightContentRender={rightProps => <RightContent {...rightProps} {...settings} />}
       contentStyle={{ margin: 0 }}
     >
       <ProLayout
         // logo={logo}
         // formatMessage={formatMessage}
         // 因为topmenu已经有logo了，所以我们选择将菜单的logo不渲染
         menuHeaderRender={false}
         // footer不好看，我把它也关了
         footerRender={false}
         formatMessage={formatMessage}
         onCollapse={handleMenuCollapse}
         menuItemRender={(menuItemProps, defaultDom) => {
           if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
             return defaultDom;
           }

           return <Link to={menuItemProps.path}>{defaultDom}</Link>;
         }}
         breadcrumbRender={(routers = []) => [
           {
             path: '/',
             breadcrumbName: formatMessage({
               id: 'menu.home',
             }),
           },
           ...routers,
         ]}
         itemRender={(route, params, routes, paths) => {
           const first = routes.indexOf(route) === 0;
           return first ? (
             <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
           ) : (
             <span>{route.breadcrumbName}</span>
           );
         }}
         menuDataRender={menuDataRender}
         // 因为rightcontent为空，所以header也没有渲染的必要
         headerRender={false}
         rightContentRender={false}
         {...props}
         {...settings}
       >
         <Authorized authority={authorized.authority} noMatch={noMatch}>
           {children}
         </Authorized>
       </ProLayout>
     </ProLayout>
   );
 };

 export default connect(({ global, settings }) => ({
   collapsed: global.collapsed,
   settings,
 }))(BasicLayout);
