import Link from "next/link";

function Button(props: { children: React.ReactNode}): JSX.Element {
  
    return (
        <button className='bg-rojo text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 '>
            <Link href={`/${props.children}`} >{props.children}</Link>
        </button>
    );
}

export default Button;
