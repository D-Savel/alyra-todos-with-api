const Login = () => {
  return (
    <form>
      < div className=" input-group mb-3" >
        <label className="form-label me-2" htmlFor="login">Login</label>
        <input className="form-control mb-3" id="login" required />
      </div >
      <div className="col-1 input-group mb-3">
        <label className="me-2" htmlFor="inputPassword" >Password</label>
        <input type="password" class="form-control" id="inputPassword" />
        <button type="submit" className="btn btn-primary">Se connecter</button>
      </div>
    </form >
  )
}
export default Login