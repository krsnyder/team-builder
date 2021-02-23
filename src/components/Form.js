export default function Form(props) {
  const {band, update, onSubmit} = props

  const onChange = (e) => {
    update(e.target.values)
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
            value={band.name}
          />
        </label>

        <label>
          Role:
          <select name="role" onChange={onChange} value={band.role}>
            <option value=""> ---- Select Role --- </option>
            <option value=""> Bass </option>
            <option value=""> Drummer </option>
            <option value=""> Keys </option>
            <option value=""> Lead Guitar </option>
            <option value=""> Guitar </option>
            <option value=""> Vocals </option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
    
  )
}