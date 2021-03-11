import React from "react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
    Header,
    HeaderName,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    HeaderContainer,
    SkipToContent,
    HeaderMenuButton,
    SideNav,
    SideNavItems,
    HeaderSideNavItems
} from "carbon-components-react/lib/components/UIShell";

function SiteHeader() {
    return (
        <div className="container">
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="Carbon Tutorial">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName href="/" prefix="IBM">
                            Carbon Tutorial
                        </HeaderName>
                        <HeaderNavigation aria-label="Carbon Tutorial">
                            <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                        </HeaderNavigation>
                        <SideNav
                            aria-label="Side navigation"
                            expanded={isSideNavExpanded}
                            isPersistent={false}>
                            <SideNavItems>
                                <HeaderSideNavItems>
                                    <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                                </HeaderSideNavItems>
                            </SideNavItems>
                        </SideNav>
                        <HeaderGlobalBar />
                    </Header>
                )}
            />
        </div>
    );
}

export default SiteHeader;
