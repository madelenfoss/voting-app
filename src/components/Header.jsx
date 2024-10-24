import airGuitarPlayer from "../assets/images/airguitarlogo.png"

const Header = () => {
  return (
    <div>
      <h1>Vote for your favourite air guitar player</h1>
      <img 
         src={airGuitarPlayer} 
         className="logo"
         alt="Ari guitar player logo"/>
    </div>
  )
}
export default Header;
