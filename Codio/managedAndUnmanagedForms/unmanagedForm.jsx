'use strict';

function UnmanagedForm() {
  function submitForm(event) {
    /* 3. You code goes here */
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={/* 2. Your code goes here */}>
        <label>Name: </label>
        <input type="text" /* 1. Your code goes here */ />
        <button>Submit</button>
      </form>
      <p>
        My name is <span id="name-span"></span>
      </p>
    </>
  );
}

ReactDOM.render(<UnmanagedForm />, document.getElementById('UnmanagedForm'));
