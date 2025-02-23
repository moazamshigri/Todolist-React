function Footer(){
    const style = {
        display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "17px"
    }
return(
    <footer style={style}>&copy; Made by Moazam Shigri{new Date().getFullYear()}</footer>
)
}
export default Footer;