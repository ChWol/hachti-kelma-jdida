import React, {useState} from "react";
import { Link } from 'react-router-dom';

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
    SideNavItems
} from "carbon-components-react/lib/components/UIShell";

import {
    Menu20,
    Close20,
    Notification20,
    Help20,
} from '@carbon/icons-react';

function SiteHeader() {
    // Only used for IBM project, can be removed soon
    const [show, setShow] = useState(false);

    return (
        <div>
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="Hachti kelma jdida">
                        <SkipToContent />
                        <HeaderGlobalAction aria-label="App Switcher" onClick={() => setShow(!show)}>
                            {show ? <Close20 /> : <Menu20 />}
                        </HeaderGlobalAction>
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={() => setShow(!show)}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName element={Link} to="/" prefix="" onClick={() => setShow(false)}>
                            Hachti kelma jdida
                        </HeaderName>
                        <HeaderNavigation aria-label="Carbon Tutorial">
                            <HeaderMenuItem element={Link} to="/translations">Translations</HeaderMenuItem>
                            <HeaderMenuItem element={Link} to="/translator">Translator</HeaderMenuItem>
                            <HeaderMenuItem element={Link} to="/about">About</HeaderMenuItem>
                            <HeaderMenuItem element={Link} to="/legal">Legal</HeaderMenuItem>
                            <HeaderMenuItem element={Link} to="/playground">Yosr's Playground</HeaderMenuItem>
                        </HeaderNavigation>
                        <SideNav
                            aria-label="Side navigation"
                            expanded={show}
                            isPersistent={false}>
                            <SideNavItems>
                                <HeaderMenuItem element={Link} to="/translations" onClick={() => setShow(false)}>
                                    Translations
                                </HeaderMenuItem>
                                <HeaderMenuItem element={Link} to="/about" onClick={() => setShow(false)}>About</HeaderMenuItem>
                                <HeaderMenuItem element={Link} to="/legal" onClick={() => setShow(false)}>Legal</HeaderMenuItem>
                                <HeaderMenuItem element={Link} to="/" onClick={() => setShow(false)}>
                                    Back
                                </HeaderMenuItem>

                            </SideNavItems>
                        </SideNav>
                        <HeaderGlobalBar>
                            <HeaderGlobalAction aria-label="Notifications">
                                <Notification20 />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction aria-label="User Avatar">
                                <a style={{color: 'white'}} href='https://www.youtube.com/watch?v=z3E9YTPlfFw'><Help20 /></a>
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>
                    </Header>
                )}
            />
        </div>
    );
}

export default SiteHeader;
