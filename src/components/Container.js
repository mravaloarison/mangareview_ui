export default function Container(props) {
    return (
        <div class="container max-w-7xl mx-auto">
            {props.children}
        </div>
    )
}