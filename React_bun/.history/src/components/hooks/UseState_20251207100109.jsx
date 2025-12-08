export const UseState = () => {
    return (
     <div>
        <h2>UseState challenge</h2>

        <p> Count : <span>0</span></p>

        <div>
            <label htmlFor="">
                step:
                <input type="number" />
            </label>
        </div>

        <div>
            <button>INC</button>
            <button>DEC</button>
            <button>RESET</button>
        </div>
     </div>
    );
  }