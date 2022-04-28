import { Home } from '../views/Home';
import { Rooms } from '../views/Rooms';
import { Button } from '../common/Button';
import { Cart } from '../views/Cart';
import { Treatments } from '../views/Treatments';

const navigateTo = (component) => {
    const navigateEvent = new CustomEvent('navigate', {
        detail: component
    });

    document.body.dispatchEvent(navigateEvent);
};

const navItems = [
    {text: 'Home', component: Home },
    {text: 'Rooms', component: Rooms },
    {text: 'Treatments', component: Treatments },
    {text: 'Cart', component: Cart}
];

export function Nav() {
    const nav = document.createElement('nav');

    const buttons = navItems.map(navItem => {
        return Button({
            text: navItem.text,
            callback: () => {
                navigateTo(navItem.component)
            }
        })
    });

    nav.append(...buttons);
    nav.setAttribute('class','fixed-top bg-dark');

    return nav;
}