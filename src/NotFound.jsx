import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Yah...</h2>
            <p>Halaman tidak dapat ditemukan :(</p>
            <Link to="/">Kembali ke halaman utama ...</Link>
        </div>
     );
}
 
export default NotFound;