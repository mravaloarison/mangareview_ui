import { BookmarkSquareIcon, ClockIcon, HomeIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import NavItem from "./NavItem";


export default function Nav() {
    const navItems = [
        {
            itemLink: '/',
            itemIcon: <HomeIcon className="w-6 h-6 text-amber-700" />,
            itemTitle: 'Homepage',
        },
        {
            itemLink: '/mangalist',
            itemIcon: <BookmarkSquareIcon className="w-6 h-6 text-amber-700" />,
            itemTitle: 'My Manga List',
        },
        {
            itemLink: '/mangarequest',
            itemIcon: <ClockIcon className="w-6 h-6 text-amber-700" />,
            itemTitle: 'Requested Manga',
        },
        {
            itemLink: '/profile',
            itemIcon: <UserCircleIcon className="w-6 h-6 text-amber-700" />,
            itemTitle: 'Profile',
        },
        {
            itemLink: '/logout',
            itemIcon: <ArrowRightOnRectangleIcon className="w-6 h-6 text-amber-700" />,
            itemTitle: 'Logout',
        },
      ];      


    return (
        <div className="border rounded-lg shadow w-fit h-fit absolute right-0 lg:mr-20 mr-2.5 mt-2.5 z-50 bg-white">
            <ul className="flex flex-col gap-1.5 p-1.5">
                {navItems.map((item, index) => (
                <li key={index}>
                    <NavItem
                        itemLink={item.itemLink}
                        itemIcon={item.itemIcon}
                        itemTitle={item.itemTitle}
                    />
                </li>
                ))}
            </ul>
        </div>
    )
}
