import { Fragment, useCallback, useState } from 'react'
import Button from './Button';
import Link from '../Link';

import {
    mobilePopup as cssMobilePopup,
    mobilePopupOpened as cssMobilePopupOpened,
    item as cssItem, heading as cssHeading,
    subItem as cssSubItem, subHeading as cssSubHeading
} from './hamburger.css';

function SubMenu({ data }) {
    const list = data || [];

    return (
        <ul>{
            (list || []).map((item, i) => (
                <li key={i} className={cssSubItem}>
                    <Link {...item} className={cssSubHeading}/>
                </li>
            ))
        }</ul>
    );
}

function MenuPopup({ data, id, opened }) {
    const list = data || [];

    return (
        <nav id={id} className={cssMobilePopup + (opened ? ` ${cssMobilePopupOpened}` : '')}>
            <ul>{
                list.map(({items, ...item}, i) => (
                    <li key={i} className={cssItem}>
                        <Link {...item} className={cssHeading}/>
                        {items && <SubMenu data={items}/>}
                    </li>
                ))
            }</ul>
        </nav>
    );
}

export default function MenuButton({className, data}) {
    const id = 'ktl-open-nav-menu';

    const [isOpened, setState] = useState(false);

    const handleClick = useCallback(e => {
        e.preventDefault();
        setState(!isOpened);
    }, [ isOpened ]);

    return (
        <Fragment>
            <Button className={className} id={id} onClick={handleClick}/>
            <MenuPopup id={id} data={data} opened={isOpened}/>
        </Fragment>
    );
}
