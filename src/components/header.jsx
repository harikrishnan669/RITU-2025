

export default function Header({title, id = ''}) {
    return <h2 className="text-4xl mb-20 text-center text-white tracking-widest uppercase" id={id}>
        {title}
    </h2>
}
