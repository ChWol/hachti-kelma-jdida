import React from "react";
import {
    Header,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderContainer,
    SkipToContent,
    HeaderMenuButton,
    SideNav,
    SideNavItems,
    HeaderSideNavItems
} from "carbon-components-react/lib/components/UIShell";
import {
    AppSwitcher20,
    Notification20,
    UserAvatar20,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

function SiteHeader() {
    return (
        <div className="container">
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="Hachti kelma jdida">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName element={Link} to="/" prefix="">
                            Hachti kelma jdida
                        </HeaderName>
                        <HeaderNavigation aria-label="Carbon Tutorial">
                            <HeaderMenuItem element={Link} to="/repos">Translations</HeaderMenuItem>
                        </HeaderNavigation>
                        <SideNav
                            aria-label="Side navigation"
                            expanded={isSideNavExpanded}
                            isPersistent={false}>
                            <SideNavItems>
                                <HeaderSideNavItems>
                                    <HeaderMenuItem element={Link} to="/repos">Translations</HeaderMenuItem>
                                </HeaderSideNavItems>
                            </SideNavItems>
                        </SideNav>
                        <HeaderGlobalBar>
                            <HeaderGlobalAction aria-label="Notifications">
                                <Notification20 />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction aria-label="User Avatar">
                                <UserAvatar20 />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction aria-label="App Switcher">
                                <AppSwitcher20 />
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>
                    </Header>
                )}
            />
        </div>
    );
}

export default SiteHeader;
