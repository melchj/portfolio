
function BackgroundImage(props: {title: string, img: string}) {
    return (
        <div className='h-screen'
        style={{
            backgroundImage: `url(${props.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
            }}>
            title is: {props.title}
        </div>
    )
}

export default BackgroundImage