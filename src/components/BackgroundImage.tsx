
function BackgroundImage(props: {title: string, img: string}) {
    return (
        <div className='h-screen flex justify-center items-center'
        style={{
            backgroundImage: `url(${props.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
            }}>
            <h2 className="text-white">{props.title}</h2>
        </div>
    )
}

export default BackgroundImage