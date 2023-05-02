export default function NavItem(props) {
    return (
        <a href={props.itemLink}
            className="p-2.5 rounded-lg w-60 hover:bg-zinc-100 transition duration-200 ease-in-out flex items-center gap-3.5">
            {props.itemIcon}
            <span>
                {props.itemTitle}
            </span>
        </a>
    )
}