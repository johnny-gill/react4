const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    
    debugger;
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">유저 추가</button>
    </form>
  );
};

export default AddUser;
