
// TODO: need to look into turning off parallax scrolling for tablets/phones
// https://www.w3schools.com/howto/howto_css_parallax.asp
function BackgroundImage(props: {title: string, img: string}) {
    return (
        <div className='h-screen     justify-center items-center'
        style={{
            backgroundImage: `url(${props.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed"
            }}>
                <div className="fixed flex justify-center">
                <h2 className="text-white text-4xl font-bold">{props.title}</h2>
                </div>
        </div>
    )
}

export default BackgroundImage