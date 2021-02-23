export default function Form(props) {
  const {band, update, submit} = props

  const onChange = (e) => {
    const {name, value} = e.target;
    update(name, value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    submit()
  }

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={band.name}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={onChange}
            value={band.email}
          />
        </label>

        <label>
          Role:
          <select name="role" onChange={onChange} value={band.role}>
            <option value=""> ---- Select Role --- </option>
            <option value="bass"> Bass </option>
            <option value="drummer"> Drummer </option>
            <option value="keys"> Keys </option>
            <option value="lead"> Lead Guitar </option>
            <option value="guitar"> Guitar </option>
            <option value="vocals"> Vocals </option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
    
  )
}