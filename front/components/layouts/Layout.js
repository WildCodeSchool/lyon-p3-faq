const Layout = (props) => (
<div>
    <Link href="/"><a>Home</a></Link>
    <Link href="/index"><a>Index</a></Link>
    <Link href="/question"><a>Question</a></Link>
    {props.children}
</div>
)