import '../styles/Link.css'
const Link = ({children, adress, className}) => {
    return <a className={className} href={adress}>{children}</a>
}
export default Link;