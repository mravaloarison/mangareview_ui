export default function BtnIcon (props) {
    return (
        <button 
            onClick={props.clicked} 
            className="border rounded-md p-1.5 text-amber-800 shadow-sm hover:bg-zinc-50 transition duration-200 ease-in-out w-fit bg-white">
            {props.children}
        </button>
    )
}