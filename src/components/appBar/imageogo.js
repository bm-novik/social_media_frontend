const ImageLogo = () => {
    return (
        <img
            height={550}
            width="100%"
            src={`${'../../media/Untitled design.png'}?w=248&fit=crop&auto=format`}
            srcSet={`${'../..media/Untitled design.png'}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={'Breakfast'}
            loading="lazy"/>
    );
};

export default ImageLogo


